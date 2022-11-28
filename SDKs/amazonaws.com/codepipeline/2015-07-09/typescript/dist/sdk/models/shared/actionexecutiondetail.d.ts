import { SpeakeasyBase } from "../../../internal/utils";
import { ActionExecutionInput } from "./actionexecutioninput";
import { ActionExecutionOutput } from "./actionexecutionoutput";
import { ActionExecutionStatusEnum } from "./actionexecutionstatusenum";
/**
 * Returns information about an execution of an action, including the action execution ID, and the name, version, and timing of the action.
**/
export declare class ActionExecutionDetail extends SpeakeasyBase {
    actionExecutionId?: string;
    actionName?: string;
    input?: ActionExecutionInput;
    lastUpdateTime?: Date;
    output?: ActionExecutionOutput;
    pipelineExecutionId?: string;
    pipelineVersion?: number;
    stageName?: string;
    startTime?: Date;
    status?: ActionExecutionStatusEnum;
}
