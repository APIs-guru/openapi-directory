import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreatePipelineOutput
/** 
 * Contains the output of CreatePipeline.
**/
export class CreatePipelineOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pipelineId" })
  pipelineId: string;
}
