import { SpeakeasyBase } from "../../../internal/utils";
import { JobExecutionSummaryForJob } from "./jobexecutionsummaryforjob";
export declare class ListJobExecutionsForJobResponse extends SpeakeasyBase {
    executionSummaries?: JobExecutionSummaryForJob[];
    nextToken?: string;
}
