import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Pipeline } from "./pipeline";


// UpdatePipelineStatusResponse
/** 
 * When you update status for a pipeline, Elastic Transcoder returns the values that you specified in the request.
**/
export class UpdatePipelineStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Pipeline" })
  pipeline?: Pipeline;
}
