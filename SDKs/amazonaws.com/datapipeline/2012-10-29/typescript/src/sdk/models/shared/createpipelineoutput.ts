import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreatePipelineOutput
/** 
 * Contains the output of CreatePipeline.
**/
export class CreatePipelineOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=pipelineId" })
  pipelineId: string;
}
