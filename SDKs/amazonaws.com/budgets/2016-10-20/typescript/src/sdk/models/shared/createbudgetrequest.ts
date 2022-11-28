import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Budget } from "./budget";
import { NotificationWithSubscribers } from "./notificationwithsubscribers";



// CreateBudgetRequest
/** 
 *  Request of CreateBudget 
**/
export class CreateBudgetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=Budget" })
  budget: Budget;

  @SpeakeasyMetadata({ data: "json, name=NotificationsWithSubscribers", elemType: NotificationWithSubscribers })
  notificationsWithSubscribers?: NotificationWithSubscribers[];
}
