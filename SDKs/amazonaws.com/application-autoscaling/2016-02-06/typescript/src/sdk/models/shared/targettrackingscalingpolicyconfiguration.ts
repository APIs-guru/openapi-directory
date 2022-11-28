import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomizedMetricSpecification } from "./customizedmetricspecification";
import { PredefinedMetricSpecification } from "./predefinedmetricspecification";



// TargetTrackingScalingPolicyConfiguration
/** 
 * Represents a target tracking scaling policy configuration to use with Application Auto Scaling.
**/
export class TargetTrackingScalingPolicyConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomizedMetricSpecification" })
  customizedMetricSpecification?: CustomizedMetricSpecification;

  @SpeakeasyMetadata({ data: "json, name=DisableScaleIn" })
  disableScaleIn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PredefinedMetricSpecification" })
  predefinedMetricSpecification?: PredefinedMetricSpecification;

  @SpeakeasyMetadata({ data: "json, name=ScaleInCooldown" })
  scaleInCooldown?: number;

  @SpeakeasyMetadata({ data: "json, name=ScaleOutCooldown" })
  scaleOutCooldown?: number;

  @SpeakeasyMetadata({ data: "json, name=TargetValue" })
  targetValue: number;
}
