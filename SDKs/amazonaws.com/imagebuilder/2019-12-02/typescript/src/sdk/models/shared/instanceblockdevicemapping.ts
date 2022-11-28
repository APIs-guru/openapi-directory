import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EbsInstanceBlockDeviceSpecification } from "./ebsinstanceblockdevicespecification";



// InstanceBlockDeviceMapping
/** 
 * Defines block device mappings for the instance used to configure your image.
**/
export class InstanceBlockDeviceMapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceName" })
  deviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=ebs" })
  ebs?: EbsInstanceBlockDeviceSpecification;

  @SpeakeasyMetadata({ data: "json, name=noDevice" })
  noDevice?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualName" })
  virtualName?: string;
}
