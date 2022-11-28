import { SpeakeasyBase } from "../../../internal/utils";
import { FailureDetails } from "./failuredetails";
import { StepStateEnum } from "./stepstateenum";
import { StepStateChangeReason } from "./stepstatechangereason";
import { StepTimeline } from "./steptimeline";
/**
 * The execution status details of the cluster step.
**/
export declare class StepStatus extends SpeakeasyBase {
    failureDetails?: FailureDetails;
    state?: StepStateEnum;
    stateChangeReason?: StepStateChangeReason;
    timeline?: StepTimeline;
}
