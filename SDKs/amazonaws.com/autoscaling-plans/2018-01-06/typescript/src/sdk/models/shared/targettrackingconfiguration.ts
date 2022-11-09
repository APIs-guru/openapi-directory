import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomizedScalingMetricSpecification } from "./customizedscalingmetricspecification";
import { PredefinedScalingMetricSpecification } from "./predefinedscalingmetricspecification";


// TargetTrackingConfiguration
/** 
 * Describes a target tracking configuration to use with AWS Auto Scaling. Used with <a>ScalingInstruction</a> and <a>ScalingPolicy</a>.
**/
export class TargetTrackingConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomizedScalingMetricSpecification" })
  customizedScalingMetricSpecification?: CustomizedScalingMetricSpecification;

  @Metadata({ data: "json, name=DisableScaleIn" })
  disableScaleIn?: boolean;

  @Metadata({ data: "json, name=EstimatedInstanceWarmup" })
  estimatedInstanceWarmup?: number;

  @Metadata({ data: "json, name=PredefinedScalingMetricSpecification" })
  predefinedScalingMetricSpecification?: PredefinedScalingMetricSpecification;

  @Metadata({ data: "json, name=ScaleInCooldown" })
  scaleInCooldown?: number;

  @Metadata({ data: "json, name=ScaleOutCooldown" })
  scaleOutCooldown?: number;

  @Metadata({ data: "json, name=TargetValue" })
  targetValue: number;
}
