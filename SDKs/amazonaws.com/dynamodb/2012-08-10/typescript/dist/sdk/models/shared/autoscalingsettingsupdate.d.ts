import { SpeakeasyBase } from "../../../internal/utils";
import { AutoScalingPolicyUpdate } from "./autoscalingpolicyupdate";
/**
 * Represents the auto scaling settings to be modified for a global table or global secondary index.
**/
export declare class AutoScalingSettingsUpdate extends SpeakeasyBase {
    autoScalingDisabled?: boolean;
    autoScalingRoleArn?: string;
    maximumUnits?: number;
    minimumUnits?: number;
    scalingPolicyUpdate?: AutoScalingPolicyUpdate;
}
