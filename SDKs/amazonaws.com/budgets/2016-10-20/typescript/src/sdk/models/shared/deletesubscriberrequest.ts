import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";
import { Subscriber } from "./subscriber";



// DeleteSubscriberRequest
/** 
 *  Request of DeleteSubscriber 
**/
export class DeleteSubscriberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=BudgetName" })
  budgetName: string;

  @SpeakeasyMetadata({ data: "json, name=Notification" })
  notification: Notification;

  @SpeakeasyMetadata({ data: "json, name=Subscriber" })
  subscriber: Subscriber;
}
