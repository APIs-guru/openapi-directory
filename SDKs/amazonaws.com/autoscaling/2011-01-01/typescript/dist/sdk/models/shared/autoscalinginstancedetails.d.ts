import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchTemplateSpecification } from "./launchtemplatespecification";
/**
 * Describes an EC2 instance associated with an Auto Scaling group.
**/
export declare class AutoScalingInstanceDetails extends SpeakeasyBase {
    autoScalingGroupName: string;
    availabilityZone: string;
    healthStatus: string;
    instanceId: string;
    instanceType?: string;
    launchConfigurationName?: string;
    launchTemplate?: LaunchTemplateSpecification;
    lifecycleState: string;
    protectedFromScaleIn: boolean;
    weightedCapacity?: string;
}
