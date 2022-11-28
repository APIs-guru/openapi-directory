import { SpeakeasyBase } from "../../../internal/utils";
import { ValidationSeverityEnum } from "./validationseverityenum";
/**
 * An error or warning for a desired configuration option value.
**/
export declare class ValidationMessage extends SpeakeasyBase {
    message?: string;
    namespace?: string;
    optionName?: string;
    severity?: ValidationSeverityEnum;
}
