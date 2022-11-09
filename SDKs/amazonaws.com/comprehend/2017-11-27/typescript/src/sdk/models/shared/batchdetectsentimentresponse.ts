import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchItemError } from "./batchitemerror";
import { BatchDetectSentimentItemResult } from "./batchdetectsentimentitemresult";


export class BatchDetectSentimentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorList", elemType: shared.BatchItemError })
  errorList: BatchItemError[];

  @Metadata({ data: "json, name=ResultList", elemType: shared.BatchDetectSentimentItemResult })
  resultList: BatchDetectSentimentItemResult[];
}
