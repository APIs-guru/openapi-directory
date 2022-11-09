import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Notification } from "./notification";
import { Notification } from "./notification";


// UpdateNotificationRequest
/** 
 *  Request of UpdateNotification 
**/
export class UpdateNotificationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=BudgetName" })
  budgetName: string;

  @Metadata({ data: "json, name=NewNotification" })
  newNotification: Notification;

  @Metadata({ data: "json, name=OldNotification" })
  oldNotification: Notification;
}
