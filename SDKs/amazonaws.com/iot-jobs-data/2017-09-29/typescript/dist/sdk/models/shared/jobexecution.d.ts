import { SpeakeasyBase } from "../../../internal/utils";
import { JobExecutionStatusEnum } from "./jobexecutionstatusenum";
/**
 * Contains data about a job execution.
**/
export declare class JobExecution extends SpeakeasyBase {
    approximateSecondsBeforeTimedOut?: number;
    executionNumber?: number;
    jobDocument?: string;
    jobId?: string;
    lastUpdatedAt?: number;
    queuedAt?: number;
    startedAt?: number;
    status?: JobExecutionStatusEnum;
    statusDetails?: Map<string, string>;
    thingName?: string;
    versionNumber?: number;
}
