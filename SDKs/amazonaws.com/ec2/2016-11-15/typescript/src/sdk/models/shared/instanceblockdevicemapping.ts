import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EbsInstanceBlockDevice } from "./ebsinstanceblockdevice";



// InstanceBlockDeviceMapping
/** 
 * Describes a block device mapping.
**/
export class InstanceBlockDeviceMapping extends SpeakeasyBase {
  @SpeakeasyMetadata()
  deviceName?: string;

  @SpeakeasyMetadata()
  ebs?: EbsInstanceBlockDevice;
}
