import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ErrorError extends SpeakeasyBase {
    message?: string;
}
export declare class Error extends SpeakeasyBase {
    error?: ErrorError;
}
