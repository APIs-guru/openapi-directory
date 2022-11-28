import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BlockDeviceMapping } from "./blockdevicemapping";
import { InstanceMonitoring } from "./instancemonitoring";
import { InstanceMetadataOptions } from "./instancemetadataoptions";



// LaunchConfiguration
/** 
 * Describes a launch configuration.
**/
export class LaunchConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associatePublicIpAddress?: boolean;

  @SpeakeasyMetadata({ elemType: BlockDeviceMapping })
  blockDeviceMappings?: BlockDeviceMapping[];

  @SpeakeasyMetadata()
  classicLinkVpcId?: string;

  @SpeakeasyMetadata()
  classicLinkVpcSecurityGroups?: string[];

  @SpeakeasyMetadata()
  createdTime: Date;

  @SpeakeasyMetadata()
  ebsOptimized?: boolean;

  @SpeakeasyMetadata()
  iamInstanceProfile?: string;

  @SpeakeasyMetadata()
  imageId: string;

  @SpeakeasyMetadata()
  instanceMonitoring?: InstanceMonitoring;

  @SpeakeasyMetadata()
  instanceType: string;

  @SpeakeasyMetadata()
  kernelId?: string;

  @SpeakeasyMetadata()
  keyName?: string;

  @SpeakeasyMetadata()
  launchConfigurationArn?: string;

  @SpeakeasyMetadata()
  launchConfigurationName: string;

  @SpeakeasyMetadata()
  metadataOptions?: InstanceMetadataOptions;

  @SpeakeasyMetadata()
  placementTenancy?: string;

  @SpeakeasyMetadata()
  ramdiskId?: string;

  @SpeakeasyMetadata()
  securityGroups?: string[];

  @SpeakeasyMetadata()
  spotPrice?: string;

  @SpeakeasyMetadata()
  userData?: string;
}
