import { SpeakeasyBase } from "../../../internal/utils";
import { ValidationError } from "./validationerror";
import { ValidationWarning } from "./validationwarning";
/**
 * Contains the output of PutPipelineDefinition.
**/
export declare class PutPipelineDefinitionOutput extends SpeakeasyBase {
    errored: boolean;
    validationErrors?: ValidationError[];
    validationWarnings?: ValidationWarning[];
}
