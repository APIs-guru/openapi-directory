import { SpeakeasyBase } from "../../../internal/utils";
import { Subscriber } from "./subscriber";
import { Notification } from "./notification";
/**
 *  Request of UpdateSubscriber
**/
export declare class UpdateSubscriberRequest extends SpeakeasyBase {
    accountId: string;
    budgetName: string;
    newSubscriber: Subscriber;
    notification: Notification;
    oldSubscriber: Subscriber;
}
