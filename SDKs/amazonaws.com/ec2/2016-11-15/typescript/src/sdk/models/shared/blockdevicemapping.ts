import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EbsBlockDevice } from "./ebsblockdevice";



// BlockDeviceMapping
/** 
 * Describes a block device mapping, which defines the EBS volumes and instance store volumes to attach to an instance at launch.
**/
export class BlockDeviceMapping extends SpeakeasyBase {
  @SpeakeasyMetadata()
  deviceName?: string;

  @SpeakeasyMetadata()
  ebs?: EbsBlockDevice;

  @SpeakeasyMetadata()
  noDevice?: string;

  @SpeakeasyMetadata()
  virtualName?: string;
}
