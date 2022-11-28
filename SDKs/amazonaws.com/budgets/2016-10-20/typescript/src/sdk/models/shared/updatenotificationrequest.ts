import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";



// UpdateNotificationRequest
/** 
 *  Request of UpdateNotification 
**/
export class UpdateNotificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=BudgetName" })
  budgetName: string;

  @SpeakeasyMetadata({ data: "json, name=NewNotification" })
  newNotification: Notification;

  @SpeakeasyMetadata({ data: "json, name=OldNotification" })
  oldNotification: Notification;
}
