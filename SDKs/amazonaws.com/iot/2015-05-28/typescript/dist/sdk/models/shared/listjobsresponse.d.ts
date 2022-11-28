import { SpeakeasyBase } from "../../../internal/utils";
import { JobSummary } from "./jobsummary";
export declare class ListJobsResponse extends SpeakeasyBase {
    jobs?: JobSummary[];
    nextToken?: string;
}
