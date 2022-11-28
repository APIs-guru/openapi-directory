import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceCgroupPermissionEnum } from "./devicecgrouppermissionenum";



// Device
/** 
 * An object representing a container instance host device.
**/
export class Device extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerPath" })
  containerPath?: string;

  @SpeakeasyMetadata({ data: "json, name=hostPath" })
  hostPath: string;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: DeviceCgroupPermissionEnum[];
}
