import { SpeakeasyBase } from "../../../internal/utils";
import { Budget } from "./budget";
import { NotificationWithSubscribers } from "./notificationwithsubscribers";
/**
 *  Request of CreateBudget
**/
export declare class CreateBudgetRequest extends SpeakeasyBase {
    accountId: string;
    budget: Budget;
    notificationsWithSubscribers?: NotificationWithSubscribers[];
}
