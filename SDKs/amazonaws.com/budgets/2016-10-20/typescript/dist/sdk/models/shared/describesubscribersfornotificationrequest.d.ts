import { SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";
/**
 *  Request of DescribeSubscribersForNotification
**/
export declare class DescribeSubscribersForNotificationRequest extends SpeakeasyBase {
    accountId: string;
    budgetName: string;
    maxResults?: number;
    nextToken?: string;
    notification: Notification;
}
