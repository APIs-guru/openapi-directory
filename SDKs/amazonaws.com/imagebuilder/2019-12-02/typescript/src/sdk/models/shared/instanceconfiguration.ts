import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstanceBlockDeviceMapping } from "./instanceblockdevicemapping";


// InstanceConfiguration
/** 
 * Defines a custom source AMI and block device mapping configurations of an instance used for building and testing container images.
**/
export class InstanceConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=blockDeviceMappings", elemType: shared.InstanceBlockDeviceMapping })
  blockDeviceMappings?: InstanceBlockDeviceMapping[];

  @Metadata({ data: "json, name=image" })
  image?: string;
}
