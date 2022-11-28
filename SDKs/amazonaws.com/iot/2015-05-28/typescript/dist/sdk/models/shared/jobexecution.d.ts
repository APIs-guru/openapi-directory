import { SpeakeasyBase } from "../../../internal/utils";
import { JobExecutionStatusEnum } from "./jobexecutionstatusenum";
import { JobExecutionStatusDetails } from "./jobexecutionstatusdetails";
/**
 * The job execution object represents the execution of a job on a particular device.
**/
export declare class JobExecution extends SpeakeasyBase {
    approximateSecondsBeforeTimedOut?: number;
    executionNumber?: number;
    forceCanceled?: boolean;
    jobId?: string;
    lastUpdatedAt?: Date;
    queuedAt?: Date;
    startedAt?: Date;
    status?: JobExecutionStatusEnum;
    statusDetails?: JobExecutionStatusDetails;
    thingArn?: string;
    versionNumber?: number;
}
