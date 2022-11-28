import { SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";
import { Subscriber } from "./subscriber";
/**
 *  Request of CreateNotification
**/
export declare class CreateNotificationRequest extends SpeakeasyBase {
    accountId: string;
    budgetName: string;
    notification: Notification;
    subscribers: Subscriber[];
}
