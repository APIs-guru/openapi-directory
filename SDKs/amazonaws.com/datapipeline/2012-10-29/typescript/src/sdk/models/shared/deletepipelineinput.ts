import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeletePipelineInput
/** 
 * Contains the parameters for DeletePipeline.
**/
export class DeletePipelineInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pipelineId" })
  pipelineId: string;
}
