import { SpeakeasyBase } from "../../../internal/utils";
import { DetectMitigationActionExecutionStatusEnum } from "./detectmitigationactionexecutionstatusenum";
/**
 *  Describes which mitigation actions should be executed.
**/
export declare class DetectMitigationActionExecution extends SpeakeasyBase {
    actionName?: string;
    errorCode?: string;
    executionEndDate?: Date;
    executionStartDate?: Date;
    message?: string;
    status?: DetectMitigationActionExecutionStatusEnum;
    taskId?: string;
    thingName?: string;
    violationId?: string;
}
