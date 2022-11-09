import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Budget } from "./budget";
import { NotificationWithSubscribers } from "./notificationwithsubscribers";


// CreateBudgetRequest
/** 
 *  Request of CreateBudget 
**/
export class CreateBudgetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=Budget" })
  budget: Budget;

  @Metadata({ data: "json, name=NotificationsWithSubscribers", elemType: shared.NotificationWithSubscribers })
  notificationsWithSubscribers?: NotificationWithSubscribers[];
}
