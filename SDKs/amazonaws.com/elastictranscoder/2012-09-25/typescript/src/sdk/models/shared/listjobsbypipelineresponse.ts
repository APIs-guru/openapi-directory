import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Job } from "./job";


// ListJobsByPipelineResponse
/** 
 * The <code>ListJobsByPipelineResponse</code> structure.
**/
export class ListJobsByPipelineResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Jobs", elemType: shared.Job })
  jobs?: Job[];

  @Metadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;
}
