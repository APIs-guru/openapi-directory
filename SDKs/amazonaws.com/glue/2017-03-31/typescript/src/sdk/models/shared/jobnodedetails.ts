import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobRun } from "./jobrun";


// JobNodeDetails
/** 
 * The details of a Job node present in the workflow.
**/
export class JobNodeDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobRuns", elemType: shared.JobRun })
  jobRuns?: JobRun[];
}
