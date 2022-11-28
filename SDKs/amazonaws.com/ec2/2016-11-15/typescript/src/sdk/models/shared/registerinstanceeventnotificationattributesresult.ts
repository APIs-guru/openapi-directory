import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceTagNotificationAttribute } from "./instancetagnotificationattribute";



export class RegisterInstanceEventNotificationAttributesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceTagAttribute?: InstanceTagNotificationAttribute;
}
