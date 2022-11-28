import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventSubscription } from "./eventsubscription";



// Subscription
/** 
 * This data type is used as a response element in the <a>ListEventSubscriptions</a> action.
**/
export class Subscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventSubscriptions", elemType: EventSubscription })
  eventSubscriptions: EventSubscription[];

  @SpeakeasyMetadata({ data: "json, name=resourceArn" })
  resourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=topicArn" })
  topicArn: string;
}
