import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomizedMetricSpecification } from "./customizedmetricspecification";
import { PredefinedMetricSpecification } from "./predefinedmetricspecification";
/**
 * Represents a target tracking scaling policy configuration to use with Application Auto Scaling.
**/
export declare class TargetTrackingScalingPolicyConfiguration extends SpeakeasyBase {
    customizedMetricSpecification?: CustomizedMetricSpecification;
    disableScaleIn?: boolean;
    predefinedMetricSpecification?: PredefinedMetricSpecification;
    scaleInCooldown?: number;
    scaleOutCooldown?: number;
    targetValue: number;
}
