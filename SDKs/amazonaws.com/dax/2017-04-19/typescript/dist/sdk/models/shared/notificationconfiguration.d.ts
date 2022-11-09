import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Describes a notification topic and its status. Notification topics are used for publishing DAX events to subscribers using Amazon Simple Notification Service (SNS).
**/
export declare class NotificationConfiguration extends SpeakeasyBase {
    topicArn?: string;
    topicStatus?: string;
}
