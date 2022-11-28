import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Pipeline } from "./pipeline";
import { Warning } from "./warning";



// CreatePipelineResponse
/** 
 * When you create a pipeline, Elastic Transcoder returns the values that you specified in the request.
**/
export class CreatePipelineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Pipeline" })
  pipeline?: Pipeline;

  @SpeakeasyMetadata({ data: "json, name=Warnings", elemType: Warning })
  warnings?: Warning[];
}
