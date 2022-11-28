import { SpeakeasyBase } from "../../../internal/utils";
import { JobExecutionSummary } from "./jobexecutionsummary";
export declare class GetPendingJobExecutionsResponse extends SpeakeasyBase {
    inProgressJobs?: JobExecutionSummary[];
    queuedJobs?: JobExecutionSummary[];
}
