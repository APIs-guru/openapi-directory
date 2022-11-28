import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";
/**
 * Information about a deployment error.
**/
export declare class ErrorInformation extends SpeakeasyBase {
    code?: ErrorCodeEnum;
    message?: string;
}
