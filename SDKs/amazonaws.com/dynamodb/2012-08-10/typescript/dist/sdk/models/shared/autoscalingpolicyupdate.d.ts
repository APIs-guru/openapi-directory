import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingTargetTrackingScalingPolicyConfigurationUpdate } from "./autoscalingtargettrackingscalingpolicyconfigurationupdate";
/**
 * Represents the auto scaling policy to be modified.
**/
export declare class AutoScalingPolicyUpdate extends SpeakeasyBase {
    policyName?: string;
    targetTrackingScalingPolicyConfiguration: AutoScalingTargetTrackingScalingPolicyConfigurationUpdate;
}
