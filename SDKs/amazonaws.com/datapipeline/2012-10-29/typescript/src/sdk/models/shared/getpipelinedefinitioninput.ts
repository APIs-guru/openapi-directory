import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetPipelineDefinitionInput
/** 
 * Contains the parameters for GetPipelineDefinition.
**/
export class GetPipelineDefinitionInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=pipelineId" })
  pipelineId: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
