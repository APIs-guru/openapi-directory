import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ManagedScaling } from "./managedscaling";
import { ManagedTerminationProtectionEnum } from "./managedterminationprotectionenum";


// AutoScalingGroupProvider
/** 
 * The details of the Auto Scaling group for the capacity provider.
**/
export class AutoScalingGroupProvider extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoScalingGroupArn" })
  autoScalingGroupArn: string;

  @Metadata({ data: "json, name=managedScaling" })
  managedScaling?: ManagedScaling;

  @Metadata({ data: "json, name=managedTerminationProtection" })
  managedTerminationProtection?: ManagedTerminationProtectionEnum;
}
