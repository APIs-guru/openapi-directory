import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AutoScalingTargetTrackingScalingPolicyConfigurationUpdate
/** 
 * Represents the settings of a target tracking scaling policy that will be modified.
**/
export class AutoScalingTargetTrackingScalingPolicyConfigurationUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=DisableScaleIn" })
  disableScaleIn?: boolean;

  @Metadata({ data: "json, name=ScaleInCooldown" })
  scaleInCooldown?: number;

  @Metadata({ data: "json, name=ScaleOutCooldown" })
  scaleOutCooldown?: number;

  @Metadata({ data: "json, name=TargetValue" })
  targetValue: number;
}
