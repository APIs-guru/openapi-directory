import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Pipeline } from "./pipeline";
import { Warning } from "./warning";


// UpdatePipelineResponse
/** 
 * When you update a pipeline, Elastic Transcoder returns the values that you specified in the request.
**/
export class UpdatePipelineResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Pipeline" })
  pipeline?: Pipeline;

  @Metadata({ data: "json, name=Warnings", elemType: shared.Warning })
  warnings?: Warning[];
}
