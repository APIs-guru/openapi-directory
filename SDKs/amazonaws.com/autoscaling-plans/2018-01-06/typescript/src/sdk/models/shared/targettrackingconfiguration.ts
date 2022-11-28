import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomizedScalingMetricSpecification } from "./customizedscalingmetricspecification";
import { PredefinedScalingMetricSpecification } from "./predefinedscalingmetricspecification";



// TargetTrackingConfiguration
/** 
 * Describes a target tracking configuration to use with AWS Auto Scaling. Used with <a>ScalingInstruction</a> and <a>ScalingPolicy</a>.
**/
export class TargetTrackingConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomizedScalingMetricSpecification" })
  customizedScalingMetricSpecification?: CustomizedScalingMetricSpecification;

  @SpeakeasyMetadata({ data: "json, name=DisableScaleIn" })
  disableScaleIn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EstimatedInstanceWarmup" })
  estimatedInstanceWarmup?: number;

  @SpeakeasyMetadata({ data: "json, name=PredefinedScalingMetricSpecification" })
  predefinedScalingMetricSpecification?: PredefinedScalingMetricSpecification;

  @SpeakeasyMetadata({ data: "json, name=ScaleInCooldown" })
  scaleInCooldown?: number;

  @SpeakeasyMetadata({ data: "json, name=ScaleOutCooldown" })
  scaleOutCooldown?: number;

  @SpeakeasyMetadata({ data: "json, name=TargetValue" })
  targetValue: number;
}
