import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchItemError } from "./batchitemerror";
import { BatchDetectSentimentItemResult } from "./batchdetectsentimentitemresult";



export class BatchDetectSentimentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorList", elemType: BatchItemError })
  errorList: BatchItemError[];

  @SpeakeasyMetadata({ data: "json, name=ResultList", elemType: BatchDetectSentimentItemResult })
  resultList: BatchDetectSentimentItemResult[];
}
