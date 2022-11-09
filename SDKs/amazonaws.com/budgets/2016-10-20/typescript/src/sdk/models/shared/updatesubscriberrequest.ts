import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Subscriber } from "./subscriber";
import { Notification } from "./notification";
import { Subscriber } from "./subscriber";


// UpdateSubscriberRequest
/** 
 *  Request of UpdateSubscriber 
**/
export class UpdateSubscriberRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=BudgetName" })
  budgetName: string;

  @Metadata({ data: "json, name=NewSubscriber" })
  newSubscriber: Subscriber;

  @Metadata({ data: "json, name=Notification" })
  notification: Notification;

  @Metadata({ data: "json, name=OldSubscriber" })
  oldSubscriber: Subscriber;
}
