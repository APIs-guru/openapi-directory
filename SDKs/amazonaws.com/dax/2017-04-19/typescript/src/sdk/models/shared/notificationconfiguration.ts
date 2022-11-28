import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NotificationConfiguration
/** 
 * Describes a notification topic and its status. Notification topics are used for publishing DAX events to subscribers using Amazon Simple Notification Service (SNS).
**/
export class NotificationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TopicArn" })
  topicArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TopicStatus" })
  topicStatus?: string;
}
