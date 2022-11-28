import { SpeakeasyBase } from "../../../internal/utils";
import { PhaseStatusEnum } from "./phasestatusenum";
/**
 * Describes the detailed result of a <code>TaskExecution</code> operation. This result includes the time in milliseconds spent in each phase, the status of the task execution, and the errors encountered.
**/
export declare class TaskExecutionResultDetail extends SpeakeasyBase {
    errorCode?: string;
    errorDetail?: string;
    prepareDuration?: number;
    prepareStatus?: PhaseStatusEnum;
    totalDuration?: number;
    transferDuration?: number;
    transferStatus?: PhaseStatusEnum;
    verifyDuration?: number;
    verifyStatus?: PhaseStatusEnum;
}
