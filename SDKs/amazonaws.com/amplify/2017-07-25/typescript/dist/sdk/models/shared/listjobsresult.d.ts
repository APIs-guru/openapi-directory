import { SpeakeasyBase } from "../../../internal/utils/utils";
import { JobSummary } from "./jobsummary";
/**
 *  The maximum number of records to list in a single response.
**/
export declare class ListJobsResult extends SpeakeasyBase {
    jobSummaries: JobSummary[];
    nextToken?: string;
}
