import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";



// PollForJobsOutput
/** 
 * Represents the output of a <code>PollForJobs</code> action.
**/
export class PollForJobsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobs", elemType: Job })
  jobs?: Job[];
}
