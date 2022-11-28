import { SpeakeasyBase } from "../../../internal/utils";
import { ValidationError } from "./validationerror";
import { ValidationWarning } from "./validationwarning";
/**
 * Contains the output of ValidatePipelineDefinition.
**/
export declare class ValidatePipelineDefinitionOutput extends SpeakeasyBase {
    errored: boolean;
    validationErrors?: ValidationError[];
    validationWarnings?: ValidationWarning[];
}
