import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceBlockDeviceMapping } from "./instanceblockdevicemapping";



// InstanceConfiguration
/** 
 * Defines a custom source AMI and block device mapping configurations of an instance used for building and testing container images.
**/
export class InstanceConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blockDeviceMappings", elemType: InstanceBlockDeviceMapping })
  blockDeviceMappings?: InstanceBlockDeviceMapping[];

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;
}
