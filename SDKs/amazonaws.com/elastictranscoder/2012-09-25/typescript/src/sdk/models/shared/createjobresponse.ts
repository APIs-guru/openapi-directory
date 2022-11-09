import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Job } from "./job";


// CreateJobResponse
/** 
 * The CreateJobResponse structure.
**/
export class CreateJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Job" })
  job?: Job;
}
