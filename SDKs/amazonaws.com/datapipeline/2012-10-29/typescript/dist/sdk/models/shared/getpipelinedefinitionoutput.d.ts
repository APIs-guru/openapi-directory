import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ParameterObject } from "./parameterobject";
import { ParameterValue } from "./parametervalue";
import { PipelineObject } from "./pipelineobject";
/**
 * Contains the output of GetPipelineDefinition.
**/
export declare class GetPipelineDefinitionOutput extends SpeakeasyBase {
    parameterObjects?: ParameterObject[];
    parameterValues?: ParameterValue[];
    pipelineObjects?: PipelineObject[];
}
