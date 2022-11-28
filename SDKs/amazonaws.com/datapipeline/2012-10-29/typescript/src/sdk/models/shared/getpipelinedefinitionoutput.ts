import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParameterObject } from "./parameterobject";
import { ParameterValue } from "./parametervalue";
import { PipelineObject } from "./pipelineobject";



// GetPipelineDefinitionOutput
/** 
 * Contains the output of GetPipelineDefinition.
**/
export class GetPipelineDefinitionOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameterObjects", elemType: ParameterObject })
  parameterObjects?: ParameterObject[];

  @SpeakeasyMetadata({ data: "json, name=parameterValues", elemType: ParameterValue })
  parameterValues?: ParameterValue[];

  @SpeakeasyMetadata({ data: "json, name=pipelineObjects", elemType: PipelineObject })
  pipelineObjects?: PipelineObject[];
}
