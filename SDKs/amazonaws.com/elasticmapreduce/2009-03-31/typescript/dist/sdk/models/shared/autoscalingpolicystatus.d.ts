import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingPolicyStateEnum } from "./autoscalingpolicystateenum";
import { AutoScalingPolicyStateChangeReason } from "./autoscalingpolicystatechangereason";
/**
 * The status of an automatic scaling policy.
**/
export declare class AutoScalingPolicyStatus extends SpeakeasyBase {
    state?: AutoScalingPolicyStateEnum;
    stateChangeReason?: AutoScalingPolicyStateChangeReason;
}
