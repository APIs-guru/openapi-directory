import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedScaling } from "./managedscaling";
import { ManagedTerminationProtectionEnum } from "./managedterminationprotectionenum";
/**
 * The details of the Auto Scaling group for the capacity provider.
**/
export declare class AutoScalingGroupProvider extends SpeakeasyBase {
    autoScalingGroupArn: string;
    managedScaling?: ManagedScaling;
    managedTerminationProtection?: ManagedTerminationProtectionEnum;
}
