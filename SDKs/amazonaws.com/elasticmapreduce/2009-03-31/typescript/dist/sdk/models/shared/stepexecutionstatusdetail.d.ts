import { SpeakeasyBase } from "../../../internal/utils";
import { StepExecutionStateEnum } from "./stepexecutionstateenum";
/**
 * The execution state of a step.
**/
export declare class StepExecutionStatusDetail extends SpeakeasyBase {
    creationDateTime: Date;
    endDateTime?: Date;
    lastStateChangeReason?: string;
    startDateTime?: Date;
    state: StepExecutionStateEnum;
}
