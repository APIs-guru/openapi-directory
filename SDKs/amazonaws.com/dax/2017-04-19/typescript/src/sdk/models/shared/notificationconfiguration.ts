import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NotificationConfiguration
/** 
 * Describes a notification topic and its status. Notification topics are used for publishing DAX events to subscribers using Amazon Simple Notification Service (SNS).
**/
export class NotificationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=TopicArn" })
  topicArn?: string;

  @Metadata({ data: "json, name=TopicStatus" })
  topicStatus?: string;
}
