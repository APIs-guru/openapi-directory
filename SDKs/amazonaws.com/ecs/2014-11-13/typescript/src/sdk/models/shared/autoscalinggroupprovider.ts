import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManagedScaling } from "./managedscaling";
import { ManagedTerminationProtectionEnum } from "./managedterminationprotectionenum";



// AutoScalingGroupProvider
/** 
 * The details of the Auto Scaling group for the capacity provider.
**/
export class AutoScalingGroupProvider extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoScalingGroupArn" })
  autoScalingGroupArn: string;

  @SpeakeasyMetadata({ data: "json, name=managedScaling" })
  managedScaling?: ManagedScaling;

  @SpeakeasyMetadata({ data: "json, name=managedTerminationProtection" })
  managedTerminationProtection?: ManagedTerminationProtectionEnum;
}
