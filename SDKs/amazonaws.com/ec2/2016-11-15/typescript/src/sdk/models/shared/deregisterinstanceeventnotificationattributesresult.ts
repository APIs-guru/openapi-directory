import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceTagNotificationAttribute } from "./instancetagnotificationattribute";



export class DeregisterInstanceEventNotificationAttributesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceTagAttribute?: InstanceTagNotificationAttribute;
}
