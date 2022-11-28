import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines a validation error. Validation errors prevent pipeline activation. The set of validation errors that can be returned are defined by AWS Data Pipeline.
**/
export declare class ValidationError extends SpeakeasyBase {
    errors?: string[];
    id?: string;
}
