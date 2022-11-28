import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingPolicyStateChangeReasonCodeEnum } from "./autoscalingpolicystatechangereasoncodeenum";
/**
 * The reason for an <a>AutoScalingPolicyStatus</a> change.
**/
export declare class AutoScalingPolicyStateChangeReason extends SpeakeasyBase {
    code?: AutoScalingPolicyStateChangeReasonCodeEnum;
    message?: string;
}
