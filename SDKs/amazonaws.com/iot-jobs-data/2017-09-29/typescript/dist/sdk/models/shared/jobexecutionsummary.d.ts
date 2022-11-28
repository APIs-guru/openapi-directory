import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains a subset of information about a job execution.
**/
export declare class JobExecutionSummary extends SpeakeasyBase {
    executionNumber?: number;
    jobId?: string;
    lastUpdatedAt?: number;
    queuedAt?: number;
    startedAt?: number;
    versionNumber?: number;
}
