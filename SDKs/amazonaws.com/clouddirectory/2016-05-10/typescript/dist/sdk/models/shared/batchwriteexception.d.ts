import { SpeakeasyBase } from "../../../internal/utils";
import { BatchWriteExceptionTypeEnum } from "./batchwriteexceptiontypeenum";
/**
 * A <code>BatchWrite</code> exception has occurred.
**/
export declare class BatchWriteException extends SpeakeasyBase {
    index?: number;
    message?: string;
    type?: BatchWriteExceptionTypeEnum;
}
