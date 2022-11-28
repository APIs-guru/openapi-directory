import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorDetails } from "./errordetails";
import { ActionExecutionStatusEnum } from "./actionexecutionstatusenum";
/**
 * Represents information about the run of an action.
**/
export declare class ActionExecution extends SpeakeasyBase {
    actionExecutionId?: string;
    errorDetails?: ErrorDetails;
    externalExecutionId?: string;
    externalExecutionUrl?: string;
    lastStatusChange?: Date;
    lastUpdatedBy?: string;
    percentComplete?: number;
    status?: ActionExecutionStatusEnum;
    summary?: string;
    token?: string;
}
