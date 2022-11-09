import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BatchItemError } from "./batchitemerror";
import { BatchDetectEntitiesItemResult } from "./batchdetectentitiesitemresult";


export class BatchDetectEntitiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorList", elemType: shared.BatchItemError })
  errorList: BatchItemError[];

  @Metadata({ data: "json, name=ResultList", elemType: shared.BatchDetectEntitiesItemResult })
  resultList: BatchDetectEntitiesItemResult[];
}
