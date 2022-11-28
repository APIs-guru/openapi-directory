import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LaunchTemplateEbsBlockDevice } from "./launchtemplateebsblockdevice";



// LaunchTemplateBlockDeviceMapping
/** 
 * Describes a block device mapping.
**/
export class LaunchTemplateBlockDeviceMapping extends SpeakeasyBase {
  @SpeakeasyMetadata()
  deviceName?: string;

  @SpeakeasyMetadata()
  ebs?: LaunchTemplateEbsBlockDevice;

  @SpeakeasyMetadata()
  noDevice?: string;

  @SpeakeasyMetadata()
  virtualName?: string;
}
