import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";



// ListJobsByPipelineResponse
/** 
 * The <code>ListJobsByPipelineResponse</code> structure.
**/
export class ListJobsByPipelineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Jobs", elemType: Job })
  jobs?: Job[];

  @SpeakeasyMetadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;
}
