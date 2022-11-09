import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceProfile } from "./instanceprofile";
import { InstanceStatusEnum } from "./instancestatusenum";


// DeviceInstance
/** 
 * Represents the device instance.
**/
export class DeviceInstance extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=deviceArn" })
  deviceArn?: string;

  @Metadata({ data: "json, name=instanceProfile" })
  instanceProfile?: InstanceProfile;

  @Metadata({ data: "json, name=labels" })
  labels?: string[];

  @Metadata({ data: "json, name=status" })
  status?: InstanceStatusEnum;

  @Metadata({ data: "json, name=udid" })
  udid?: string;
}
