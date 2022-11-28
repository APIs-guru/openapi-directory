import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetPipelineDefinitionInput
/** 
 * Contains the parameters for GetPipelineDefinition.
**/
export class GetPipelineDefinitionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pipelineId" })
  pipelineId: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
