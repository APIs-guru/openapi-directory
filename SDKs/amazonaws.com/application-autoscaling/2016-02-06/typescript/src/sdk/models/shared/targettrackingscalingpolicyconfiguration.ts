import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomizedMetricSpecification } from "./customizedmetricspecification";
import { PredefinedMetricSpecification } from "./predefinedmetricspecification";


// TargetTrackingScalingPolicyConfiguration
/** 
 * Represents a target tracking scaling policy configuration to use with Application Auto Scaling.
**/
export class TargetTrackingScalingPolicyConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomizedMetricSpecification" })
  customizedMetricSpecification?: CustomizedMetricSpecification;

  @Metadata({ data: "json, name=DisableScaleIn" })
  disableScaleIn?: boolean;

  @Metadata({ data: "json, name=PredefinedMetricSpecification" })
  predefinedMetricSpecification?: PredefinedMetricSpecification;

  @Metadata({ data: "json, name=ScaleInCooldown" })
  scaleInCooldown?: number;

  @Metadata({ data: "json, name=ScaleOutCooldown" })
  scaleOutCooldown?: number;

  @Metadata({ data: "json, name=TargetValue" })
  targetValue: number;
}
