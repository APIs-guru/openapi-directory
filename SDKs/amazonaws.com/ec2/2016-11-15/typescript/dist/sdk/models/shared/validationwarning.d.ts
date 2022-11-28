import { SpeakeasyBase } from "../../../internal/utils";
import { ValidationError } from "./validationerror";
/**
 * The error codes and error messages that are returned for the parameters or parameter combinations that are not valid when a new launch template or new version of a launch template is created.
**/
export declare class ValidationWarning extends SpeakeasyBase {
    errors?: ValidationError[];
}
