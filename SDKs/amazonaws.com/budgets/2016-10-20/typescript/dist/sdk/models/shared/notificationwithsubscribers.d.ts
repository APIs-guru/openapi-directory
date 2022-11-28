import { SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";
import { Subscriber } from "./subscriber";
/**
 * A notification with subscribers. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.
**/
export declare class NotificationWithSubscribers extends SpeakeasyBase {
    notification: Notification;
    subscribers: Subscriber[];
}
