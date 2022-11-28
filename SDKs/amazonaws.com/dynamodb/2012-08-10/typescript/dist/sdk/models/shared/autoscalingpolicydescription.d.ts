import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingTargetTrackingScalingPolicyConfigurationDescription } from "./autoscalingtargettrackingscalingpolicyconfigurationdescription";
/**
 * Represents the properties of the scaling policy.
**/
export declare class AutoScalingPolicyDescription extends SpeakeasyBase {
    policyName?: string;
    targetTrackingScalingPolicyConfiguration?: AutoScalingTargetTrackingScalingPolicyConfigurationDescription;
}
