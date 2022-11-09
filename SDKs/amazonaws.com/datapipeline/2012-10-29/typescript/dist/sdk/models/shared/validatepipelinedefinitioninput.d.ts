import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ParameterObject } from "./parameterobject";
import { ParameterValue } from "./parametervalue";
import { PipelineObject } from "./pipelineobject";
/**
 * Contains the parameters for ValidatePipelineDefinition.
**/
export declare class ValidatePipelineDefinitionInput extends SpeakeasyBase {
    parameterObjects?: ParameterObject[];
    parameterValues?: ParameterValue[];
    pipelineId: string;
    pipelineObjects: PipelineObject[];
}
