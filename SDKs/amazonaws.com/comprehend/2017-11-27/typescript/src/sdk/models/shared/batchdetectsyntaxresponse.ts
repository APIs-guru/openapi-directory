import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchItemError } from "./batchitemerror";
import { BatchDetectSyntaxItemResult } from "./batchdetectsyntaxitemresult";


export class BatchDetectSyntaxResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorList", elemType: shared.BatchItemError })
  errorList: BatchItemError[];

  @Metadata({ data: "json, name=ResultList", elemType: shared.BatchDetectSyntaxItemResult })
  resultList: BatchDetectSyntaxItemResult[];
}
