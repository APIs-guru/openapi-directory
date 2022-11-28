import { SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";
import { Subscriber } from "./subscriber";
/**
 *  Request of CreateSubscriber
**/
export declare class CreateSubscriberRequest extends SpeakeasyBase {
    accountId: string;
    budgetName: string;
    notification: Notification;
    subscriber: Subscriber;
}
