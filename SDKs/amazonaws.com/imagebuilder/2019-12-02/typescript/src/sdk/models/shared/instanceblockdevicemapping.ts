import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EbsInstanceBlockDeviceSpecification } from "./ebsinstanceblockdevicespecification";


// InstanceBlockDeviceMapping
/** 
 * Defines block device mappings for the instance used to configure your image.
**/
export class InstanceBlockDeviceMapping extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceName" })
  deviceName?: string;

  @Metadata({ data: "json, name=ebs" })
  ebs?: EbsInstanceBlockDeviceSpecification;

  @Metadata({ data: "json, name=noDevice" })
  noDevice?: string;

  @Metadata({ data: "json, name=virtualName" })
  virtualName?: string;
}
