import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BatchItemError } from "./batchitemerror";
import { BatchDetectSyntaxItemResult } from "./batchdetectsyntaxitemresult";
export declare class BatchDetectSyntaxResponse extends SpeakeasyBase {
    errorList: BatchItemError[];
    resultList: BatchDetectSyntaxItemResult[];
}
