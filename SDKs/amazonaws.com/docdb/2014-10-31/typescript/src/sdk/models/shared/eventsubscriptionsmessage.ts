import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventSubscription } from "./eventsubscription";



// EventSubscriptionsMessage
/** 
 * Represents the output of <a>DescribeEventSubscriptions</a>.
**/
export class EventSubscriptionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EventSubscription })
  eventSubscriptionsList?: EventSubscription[];

  @SpeakeasyMetadata()
  marker?: string;
}
