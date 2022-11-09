import { SpeakeasyBase } from "../../../internal/utils/utils";
import { JobSummary } from "./jobsummary";
export declare class ListJobsResponse extends SpeakeasyBase {
    jobSummaryList: JobSummary[];
    nextToken?: string;
}
