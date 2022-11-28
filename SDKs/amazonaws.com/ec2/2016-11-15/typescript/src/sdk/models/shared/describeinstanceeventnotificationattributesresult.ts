import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceTagNotificationAttribute } from "./instancetagnotificationattribute";



export class DescribeInstanceEventNotificationAttributesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceTagAttribute?: InstanceTagNotificationAttribute;
}
