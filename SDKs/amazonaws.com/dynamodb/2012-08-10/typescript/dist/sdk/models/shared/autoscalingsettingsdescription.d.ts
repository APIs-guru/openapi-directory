import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingPolicyDescription } from "./autoscalingpolicydescription";
/**
 * Represents the auto scaling settings for a global table or global secondary index.
**/
export declare class AutoScalingSettingsDescription extends SpeakeasyBase {
    autoScalingDisabled?: boolean;
    autoScalingRoleArn?: string;
    maximumUnits?: number;
    minimumUnits?: number;
    scalingPolicies?: AutoScalingPolicyDescription[];
}
