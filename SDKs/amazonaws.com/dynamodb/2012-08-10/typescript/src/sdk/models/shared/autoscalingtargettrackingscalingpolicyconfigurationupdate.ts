import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AutoScalingTargetTrackingScalingPolicyConfigurationUpdate
/** 
 * Represents the settings of a target tracking scaling policy that will be modified.
**/
export class AutoScalingTargetTrackingScalingPolicyConfigurationUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DisableScaleIn" })
  disableScaleIn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ScaleInCooldown" })
  scaleInCooldown?: number;

  @SpeakeasyMetadata({ data: "json, name=ScaleOutCooldown" })
  scaleOutCooldown?: number;

  @SpeakeasyMetadata({ data: "json, name=TargetValue" })
  targetValue: number;
}
