import { SpeakeasyBase } from "../../../internal/utils";
import { BatchItemError } from "./batchitemerror";
import { BatchDetectKeyPhrasesItemResult } from "./batchdetectkeyphrasesitemresult";
export declare class BatchDetectKeyPhrasesResponse extends SpeakeasyBase {
    errorList: BatchItemError[];
    resultList: BatchDetectKeyPhrasesItemResult[];
}
