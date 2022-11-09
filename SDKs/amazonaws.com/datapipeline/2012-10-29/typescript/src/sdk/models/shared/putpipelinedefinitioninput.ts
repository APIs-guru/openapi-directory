import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ParameterObject } from "./parameterobject";
import { ParameterValue } from "./parametervalue";
import { PipelineObject } from "./pipelineobject";


// PutPipelineDefinitionInput
/** 
 * Contains the parameters for PutPipelineDefinition.
**/
export class PutPipelineDefinitionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=parameterObjects", elemType: shared.ParameterObject })
  parameterObjects?: ParameterObject[];

  @Metadata({ data: "json, name=parameterValues", elemType: shared.ParameterValue })
  parameterValues?: ParameterValue[];

  @Metadata({ data: "json, name=pipelineId" })
  pipelineId: string;

  @Metadata({ data: "json, name=pipelineObjects", elemType: shared.PipelineObject })
  pipelineObjects: PipelineObject[];
}
