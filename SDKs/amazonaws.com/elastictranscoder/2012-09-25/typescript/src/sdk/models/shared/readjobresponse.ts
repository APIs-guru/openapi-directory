import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Job } from "./job";


// ReadJobResponse
/** 
 * The <code>ReadJobResponse</code> structure.
**/
export class ReadJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Job" })
  job?: Job;
}
