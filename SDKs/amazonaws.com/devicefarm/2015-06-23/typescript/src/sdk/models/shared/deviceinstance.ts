import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceProfile } from "./instanceprofile";
import { InstanceStatusEnum } from "./instancestatusenum";



// DeviceInstance
/** 
 * Represents the device instance.
**/
export class DeviceInstance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceArn" })
  deviceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceProfile" })
  instanceProfile?: InstanceProfile;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: string[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: InstanceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=udid" })
  udid?: string;
}
