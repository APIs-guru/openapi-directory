import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines a validation warning. Validation warnings do not prevent pipeline activation. The set of validation warnings that can be returned are defined by AWS Data Pipeline.
**/
export declare class ValidationWarning extends SpeakeasyBase {
    id?: string;
    warnings?: string[];
}
