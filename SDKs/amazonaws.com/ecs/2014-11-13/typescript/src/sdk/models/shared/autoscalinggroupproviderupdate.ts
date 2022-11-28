import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManagedScaling } from "./managedscaling";
import { ManagedTerminationProtectionEnum } from "./managedterminationprotectionenum";



// AutoScalingGroupProviderUpdate
/** 
 * The details of the Auto Scaling group capacity provider to update.
**/
export class AutoScalingGroupProviderUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=managedScaling" })
  managedScaling?: ManagedScaling;

  @SpeakeasyMetadata({ data: "json, name=managedTerminationProtection" })
  managedTerminationProtection?: ManagedTerminationProtectionEnum;
}
