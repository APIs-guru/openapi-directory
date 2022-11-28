import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BatchItemError } from "./batchitemerror";
import { BatchDetectEntitiesItemResult } from "./batchdetectentitiesitemresult";



export class BatchDetectEntitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorList", elemType: BatchItemError })
  errorList: BatchItemError[];

  @SpeakeasyMetadata({ data: "json, name=ResultList", elemType: BatchDetectEntitiesItemResult })
  resultList: BatchDetectEntitiesItemResult[];
}
