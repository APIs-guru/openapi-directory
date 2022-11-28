import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the settings of a target tracking scaling policy that will be modified.
**/
export declare class AutoScalingTargetTrackingScalingPolicyConfigurationUpdate extends SpeakeasyBase {
    disableScaleIn?: boolean;
    scaleInCooldown?: number;
    scaleOutCooldown?: number;
    targetValue: number;
}
