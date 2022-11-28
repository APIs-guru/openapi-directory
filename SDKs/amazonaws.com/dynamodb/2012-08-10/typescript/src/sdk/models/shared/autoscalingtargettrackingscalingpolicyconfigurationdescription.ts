import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AutoScalingTargetTrackingScalingPolicyConfigurationDescription
/** 
 * Represents the properties of a target tracking scaling policy.
**/
export class AutoScalingTargetTrackingScalingPolicyConfigurationDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DisableScaleIn" })
  disableScaleIn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ScaleInCooldown" })
  scaleInCooldown?: number;

  @SpeakeasyMetadata({ data: "json, name=ScaleOutCooldown" })
  scaleOutCooldown?: number;

  @SpeakeasyMetadata({ data: "json, name=TargetValue" })
  targetValue: number;
}
