import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";



// ListJobsByStatusResponse
/** 
 *  The <code>ListJobsByStatusResponse</code> structure. 
**/
export class ListJobsByStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Jobs", elemType: Job })
  jobs?: Job[];

  @SpeakeasyMetadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;
}
