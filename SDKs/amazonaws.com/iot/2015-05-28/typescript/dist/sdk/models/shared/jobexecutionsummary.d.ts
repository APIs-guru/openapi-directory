import { SpeakeasyBase } from "../../../internal/utils";
import { JobExecutionStatusEnum } from "./jobexecutionstatusenum";
/**
 * The job execution summary.
**/
export declare class JobExecutionSummary extends SpeakeasyBase {
    executionNumber?: number;
    lastUpdatedAt?: Date;
    queuedAt?: Date;
    startedAt?: Date;
    status?: JobExecutionStatusEnum;
}
