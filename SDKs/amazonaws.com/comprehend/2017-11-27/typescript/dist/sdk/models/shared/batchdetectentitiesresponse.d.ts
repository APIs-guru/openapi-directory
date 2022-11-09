import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BatchItemError } from "./batchitemerror";
import { BatchDetectEntitiesItemResult } from "./batchdetectentitiesitemresult";
export declare class BatchDetectEntitiesResponse extends SpeakeasyBase {
    errorList: BatchItemError[];
    resultList: BatchDetectEntitiesItemResult[];
}
