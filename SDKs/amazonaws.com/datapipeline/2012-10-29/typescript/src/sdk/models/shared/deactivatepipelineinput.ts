import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeactivatePipelineInput
/** 
 * Contains the parameters for DeactivatePipeline.
**/
export class DeactivatePipelineInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancelActive" })
  cancelActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pipelineId" })
  pipelineId: string;
}
