import { SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";
import { Subscriber } from "./subscriber";
/**
 *  Request of DeleteSubscriber
**/
export declare class DeleteSubscriberRequest extends SpeakeasyBase {
    accountId: string;
    budgetName: string;
    notification: Notification;
    subscriber: Subscriber;
}
