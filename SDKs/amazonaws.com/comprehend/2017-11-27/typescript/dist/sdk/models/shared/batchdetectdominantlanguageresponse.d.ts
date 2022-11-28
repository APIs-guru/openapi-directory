import { SpeakeasyBase } from "../../../internal/utils";
import { BatchItemError } from "./batchitemerror";
import { BatchDetectDominantLanguageItemResult } from "./batchdetectdominantlanguageitemresult";
export declare class BatchDetectDominantLanguageResponse extends SpeakeasyBase {
    errorList: BatchItemError[];
    resultList: BatchDetectDominantLanguageItemResult[];
}
