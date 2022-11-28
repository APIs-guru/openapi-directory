import { SpeakeasyBase } from "../../../internal/utils";
import { BatchReadExceptionTypeEnum } from "./batchreadexceptiontypeenum";
/**
 * The batch read exception structure, which contains the exception type and message.
**/
export declare class BatchReadException extends SpeakeasyBase {
    message?: string;
    type?: BatchReadExceptionTypeEnum;
}
