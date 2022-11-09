import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ManagedScaling } from "./managedscaling";
import { ManagedTerminationProtectionEnum } from "./managedterminationprotectionenum";


// AutoScalingGroupProviderUpdate
/** 
 * The details of the Auto Scaling group capacity provider to update.
**/
export class AutoScalingGroupProviderUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=managedScaling" })
  managedScaling?: ManagedScaling;

  @Metadata({ data: "json, name=managedTerminationProtection" })
  managedTerminationProtection?: ManagedTerminationProtectionEnum;
}
