import { SpeakeasyBase } from "../../../internal/utils";
import { BlockDeviceMapping } from "./blockdevicemapping";
import { InstanceMonitoring } from "./instancemonitoring";
import { InstanceMetadataOptions } from "./instancemetadataoptions";
/**
 * Describes a launch configuration.
**/
export declare class LaunchConfiguration extends SpeakeasyBase {
    associatePublicIpAddress?: boolean;
    blockDeviceMappings?: BlockDeviceMapping[];
    classicLinkVpcId?: string;
    classicLinkVpcSecurityGroups?: string[];
    createdTime: Date;
    ebsOptimized?: boolean;
    iamInstanceProfile?: string;
    imageId: string;
    instanceMonitoring?: InstanceMonitoring;
    instanceType: string;
    kernelId?: string;
    keyName?: string;
    launchConfigurationArn?: string;
    launchConfigurationName: string;
    metadataOptions?: InstanceMetadataOptions;
    placementTenancy?: string;
    ramdiskId?: string;
    securityGroups?: string[];
    spotPrice?: string;
    userData?: string;
}
