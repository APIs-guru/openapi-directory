import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AutoScalingTargetTrackingScalingPolicyConfigurationDescription
/** 
 * Represents the properties of a target tracking scaling policy.
**/
export class AutoScalingTargetTrackingScalingPolicyConfigurationDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=DisableScaleIn" })
  disableScaleIn?: boolean;

  @Metadata({ data: "json, name=ScaleInCooldown" })
  scaleInCooldown?: number;

  @Metadata({ data: "json, name=ScaleOutCooldown" })
  scaleOutCooldown?: number;

  @Metadata({ data: "json, name=TargetValue" })
  targetValue: number;
}
