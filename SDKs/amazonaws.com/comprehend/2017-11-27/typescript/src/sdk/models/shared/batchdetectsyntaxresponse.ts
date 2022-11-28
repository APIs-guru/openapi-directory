import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchItemError } from "./batchitemerror";
import { BatchDetectSyntaxItemResult } from "./batchdetectsyntaxitemresult";



export class BatchDetectSyntaxResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorList", elemType: BatchItemError })
  errorList: BatchItemError[];

  @SpeakeasyMetadata({ data: "json, name=ResultList", elemType: BatchDetectSyntaxItemResult })
  resultList: BatchDetectSyntaxItemResult[];
}
