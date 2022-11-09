import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ParameterObject } from "./parameterobject";
import { ParameterValue } from "./parametervalue";
import { PipelineObject } from "./pipelineobject";


// ValidatePipelineDefinitionInput
/** 
 * Contains the parameters for ValidatePipelineDefinition.
**/
export class ValidatePipelineDefinitionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=parameterObjects", elemType: shared.ParameterObject })
  parameterObjects?: ParameterObject[];

  @Metadata({ data: "json, name=parameterValues", elemType: shared.ParameterValue })
  parameterValues?: ParameterValue[];

  @Metadata({ data: "json, name=pipelineId" })
  pipelineId: string;

  @Metadata({ data: "json, name=pipelineObjects", elemType: shared.PipelineObject })
  pipelineObjects: PipelineObject[];
}
