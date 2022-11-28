import { SpeakeasyBase } from "../../../internal/utils";
import { RemediationExecutionStepStateEnum } from "./remediationexecutionstepstateenum";
/**
 * Name of the step from the SSM document.
**/
export declare class RemediationExecutionStep extends SpeakeasyBase {
    errorMessage?: string;
    name?: string;
    startTime?: Date;
    state?: RemediationExecutionStepStateEnum;
    stopTime?: Date;
}
