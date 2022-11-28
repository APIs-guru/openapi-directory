import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";
/**
 * An object representing an error when an asynchronous operation fails.
**/
export declare class ErrorDetail extends SpeakeasyBase {
    errorCode?: ErrorCodeEnum;
    errorMessage?: string;
    resourceIds?: string[];
}
