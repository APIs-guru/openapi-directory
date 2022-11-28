import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NotificationConfiguration
/** 
 * Describes a notification topic and its status. Notification topics are used for publishing ElastiCache events to subscribers using Amazon Simple Notification Service (SNS).
**/
export class NotificationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  topicArn?: string;

  @SpeakeasyMetadata()
  topicStatus?: string;
}
