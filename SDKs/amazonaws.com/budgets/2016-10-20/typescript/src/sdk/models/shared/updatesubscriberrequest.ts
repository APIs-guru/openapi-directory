import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Subscriber } from "./subscriber";
import { Notification } from "./notification";



// UpdateSubscriberRequest
/** 
 *  Request of UpdateSubscriber 
**/
export class UpdateSubscriberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=BudgetName" })
  budgetName: string;

  @SpeakeasyMetadata({ data: "json, name=NewSubscriber" })
  newSubscriber: Subscriber;

  @SpeakeasyMetadata({ data: "json, name=Notification" })
  notification: Notification;

  @SpeakeasyMetadata({ data: "json, name=OldSubscriber" })
  oldSubscriber: Subscriber;
}
