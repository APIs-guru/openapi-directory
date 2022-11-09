import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Notification } from "./notification";
import { Subscriber } from "./subscriber";


// CreateNotificationRequest
/** 
 *  Request of CreateNotification 
**/
export class CreateNotificationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=BudgetName" })
  budgetName: string;

  @Metadata({ data: "json, name=Notification" })
  notification: Notification;

  @Metadata({ data: "json, name=Subscribers", elemType: shared.Subscriber })
  subscribers: Subscriber[];
}
