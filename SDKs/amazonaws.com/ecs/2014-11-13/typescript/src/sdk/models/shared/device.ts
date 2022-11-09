import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceCgroupPermissionEnum } from "./devicecgrouppermissionenum";


// Device
/** 
 * An object representing a container instance host device.
**/
export class Device extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerPath" })
  containerPath?: string;

  @Metadata({ data: "json, name=hostPath" })
  hostPath: string;

  @Metadata({ data: "json, name=permissions" })
  permissions?: DeviceCgroupPermissionEnum[];
}
