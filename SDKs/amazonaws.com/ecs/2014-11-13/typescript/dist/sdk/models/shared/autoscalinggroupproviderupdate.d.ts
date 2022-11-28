import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedScaling } from "./managedscaling";
import { ManagedTerminationProtectionEnum } from "./managedterminationprotectionenum";
/**
 * The details of the Auto Scaling group capacity provider to update.
**/
export declare class AutoScalingGroupProviderUpdate extends SpeakeasyBase {
    managedScaling?: ManagedScaling;
    managedTerminationProtection?: ManagedTerminationProtectionEnum;
}
