import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceCgroupPermissionEnum } from "./devicecgrouppermissionenum";


// Device
/** 
 * <p>An object representing a container instance host device.</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources and shouldn't be provided.</p> </note>
**/
export class Device extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerPath" })
  containerPath?: string;

  @Metadata({ data: "json, name=hostPath" })
  hostPath: string;

  @Metadata({ data: "json, name=permissions" })
  permissions?: DeviceCgroupPermissionEnum[];
}
