import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorCategoryEnum } from "./errorcategoryenum";
/**
 * Error message.
**/
export declare class ErrorInfo extends SpeakeasyBase {
    errorCategory?: ErrorCategoryEnum;
    errorMessage?: string;
}
