import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeactivatePipelineInput
/** 
 * Contains the parameters for DeactivatePipeline.
**/
export class DeactivatePipelineInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=cancelActive" })
  cancelActive?: boolean;

  @Metadata({ data: "json, name=pipelineId" })
  pipelineId: string;
}
