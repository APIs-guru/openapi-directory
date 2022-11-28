import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";



// CreateJobResponse
/** 
 * The CreateJobResponse structure.
**/
export class CreateJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Job" })
  job?: Job;
}
