import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Notification } from "./notification";


// DeleteNotificationRequest
/** 
 *  Request of DeleteNotification 
**/
export class DeleteNotificationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=BudgetName" })
  budgetName: string;

  @Metadata({ data: "json, name=Notification" })
  notification: Notification;
}
