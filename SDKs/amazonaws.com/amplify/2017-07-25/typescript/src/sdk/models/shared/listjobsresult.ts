import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobSummary } from "./jobsummary";



// ListJobsResult
/** 
 *  The maximum number of records to list in a single response. 
**/
export class ListJobsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobSummaries", elemType: JobSummary })
  jobSummaries: JobSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
