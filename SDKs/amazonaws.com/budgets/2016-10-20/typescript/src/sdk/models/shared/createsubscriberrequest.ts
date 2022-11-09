import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Notification } from "./notification";
import { Subscriber } from "./subscriber";


// CreateSubscriberRequest
/** 
 *  Request of CreateSubscriber 
**/
export class CreateSubscriberRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=BudgetName" })
  budgetName: string;

  @Metadata({ data: "json, name=Notification" })
  notification: Notification;

  @Metadata({ data: "json, name=Subscriber" })
  subscriber: Subscriber;
}
