import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NotificationConfiguration
/** 
 * Describes a notification.
**/
export class NotificationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  autoScalingGroupName?: string;

  @SpeakeasyMetadata()
  notificationType?: string;

  @SpeakeasyMetadata()
  topicArn?: string;
}
