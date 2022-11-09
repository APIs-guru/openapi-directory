import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Job } from "./job";


// ListJobsByStatusResponse
/** 
 *  The <code>ListJobsByStatusResponse</code> structure. 
**/
export class ListJobsByStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Jobs", elemType: shared.Job })
  jobs?: Job[];

  @Metadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;
}
