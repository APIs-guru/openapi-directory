import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeletePipelineInput
/** 
 * Contains the parameters for DeletePipeline.
**/
export class DeletePipelineInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=pipelineId" })
  pipelineId: string;
}
