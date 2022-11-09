import { SpeakeasyBase } from "../../../internal/utils/utils";
import { StackErrorCodeEnum } from "./stackerrorcodeenum";
/**
 * Describes a stack error.
**/
export declare class StackError extends SpeakeasyBase {
    errorCode?: StackErrorCodeEnum;
    errorMessage?: string;
}
