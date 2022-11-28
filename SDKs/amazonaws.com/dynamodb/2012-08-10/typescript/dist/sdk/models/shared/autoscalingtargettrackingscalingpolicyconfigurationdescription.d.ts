import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the properties of a target tracking scaling policy.
**/
export declare class AutoScalingTargetTrackingScalingPolicyConfigurationDescription extends SpeakeasyBase {
    disableScaleIn?: boolean;
    scaleInCooldown?: number;
    scaleOutCooldown?: number;
    targetValue: number;
}
