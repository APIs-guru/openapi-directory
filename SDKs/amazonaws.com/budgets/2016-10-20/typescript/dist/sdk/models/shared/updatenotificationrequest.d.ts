import { SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";
/**
 *  Request of UpdateNotification
**/
export declare class UpdateNotificationRequest extends SpeakeasyBase {
    accountId: string;
    budgetName: string;
    newNotification: Notification;
    oldNotification: Notification;
}
