import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BatchItemError } from "./batchitemerror";
import { BatchDetectSentimentItemResult } from "./batchdetectsentimentitemresult";
export declare class BatchDetectSentimentResponse extends SpeakeasyBase {
    errorList: BatchItemError[];
    resultList: BatchDetectSentimentItemResult[];
}
