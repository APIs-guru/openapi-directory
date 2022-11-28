import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";



// ReadJobResponse
/** 
 * The <code>ReadJobResponse</code> structure.
**/
export class ReadJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Job" })
  job?: Job;
}
