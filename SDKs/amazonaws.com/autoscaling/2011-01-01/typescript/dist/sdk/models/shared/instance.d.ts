import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchTemplateSpecification } from "./launchtemplatespecification";
import { LifecycleStateEnum } from "./lifecyclestateenum";
/**
 * Describes an EC2 instance.
**/
export declare class Instance extends SpeakeasyBase {
    availabilityZone: string;
    healthStatus: string;
    instanceId: string;
    instanceType?: string;
    launchConfigurationName?: string;
    launchTemplate?: LaunchTemplateSpecification;
    lifecycleState: LifecycleStateEnum;
    protectedFromScaleIn: boolean;
    weightedCapacity?: string;
}
