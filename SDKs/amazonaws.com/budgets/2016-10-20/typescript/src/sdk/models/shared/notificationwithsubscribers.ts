import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";
import { Subscriber } from "./subscriber";



// NotificationWithSubscribers
/** 
 * A notification with subscribers. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.
**/
export class NotificationWithSubscribers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Notification" })
  notification: Notification;

  @SpeakeasyMetadata({ data: "json, name=Subscribers", elemType: Subscriber })
  subscribers: Subscriber[];
}
