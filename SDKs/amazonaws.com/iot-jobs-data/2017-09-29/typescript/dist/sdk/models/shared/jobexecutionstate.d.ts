import { SpeakeasyBase } from "../../../internal/utils";
import { JobExecutionStatusEnum } from "./jobexecutionstatusenum";
/**
 * Contains data about the state of a job execution.
**/
export declare class JobExecutionState extends SpeakeasyBase {
    status?: JobExecutionStatusEnum;
    statusDetails?: Map<string, string>;
    versionNumber?: number;
}
