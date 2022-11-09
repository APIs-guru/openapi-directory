import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobSummary } from "./jobsummary";


// ListJobsResult
/** 
 *  The maximum number of records to list in a single response. 
**/
export class ListJobsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobSummaries", elemType: shared.JobSummary })
  jobSummaries: JobSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
