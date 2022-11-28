import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobRun } from "./jobrun";



// JobNodeDetails
/** 
 * The details of a Job node present in the workflow.
**/
export class JobNodeDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobRuns", elemType: JobRun })
  jobRuns?: JobRun[];
}
