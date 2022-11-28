import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Pipeline } from "./pipeline";



// UpdatePipelineStatusResponse
/** 
 * When you update status for a pipeline, Elastic Transcoder returns the values that you specified in the request.
**/
export class UpdatePipelineStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Pipeline" })
  pipeline?: Pipeline;
}
