import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Job } from "./job";


// PollForJobsOutput
/** 
 * Represents the output of a <code>PollForJobs</code> action.
**/
export class PollForJobsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobs", elemType: shared.Job })
  jobs?: Job[];
}
