import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Notification } from "./notification";
import { Subscriber } from "./subscriber";


// NotificationWithSubscribers
/** 
 * A notification with subscribers. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.
**/
export class NotificationWithSubscribers extends SpeakeasyBase {
  @Metadata({ data: "json, name=Notification" })
  notification: Notification;

  @Metadata({ data: "json, name=Subscribers", elemType: shared.Subscriber })
  subscribers: Subscriber[];
}
