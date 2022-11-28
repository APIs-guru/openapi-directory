import { SpeakeasyBase } from "../../../internal/utils";
import { CustomizedScalingMetricSpecification } from "./customizedscalingmetricspecification";
import { PredefinedScalingMetricSpecification } from "./predefinedscalingmetricspecification";
/**
 * Describes a target tracking configuration to use with AWS Auto Scaling. Used with <a>ScalingInstruction</a> and <a>ScalingPolicy</a>.
**/
export declare class TargetTrackingConfiguration extends SpeakeasyBase {
    customizedScalingMetricSpecification?: CustomizedScalingMetricSpecification;
    disableScaleIn?: boolean;
    estimatedInstanceWarmup?: number;
    predefinedScalingMetricSpecification?: PredefinedScalingMetricSpecification;
    scaleInCooldown?: number;
    scaleOutCooldown?: number;
    targetValue: number;
}
