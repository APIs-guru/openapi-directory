import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceCgroupPermissionEnum } from "./devicecgrouppermissionenum";



// Device
/** 
 * <p>An object representing a container instance host device.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources and shouldn't be provided.</p> </note>
**/
export class Device extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerPath" })
  containerPath?: string;

  @SpeakeasyMetadata({ data: "json, name=hostPath" })
  hostPath: string;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: DeviceCgroupPermissionEnum[];
}
