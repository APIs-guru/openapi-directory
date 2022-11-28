import { SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";
/**
 *  Request of DeleteNotification
**/
export declare class DeleteNotificationRequest extends SpeakeasyBase {
    accountId: string;
    budgetName: string;
    notification: Notification;
}
