import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventSubscription } from "./eventsubscription";



// DescribeEventSubscriptionsResponse
/** 
 * <p/>
**/
export class DescribeEventSubscriptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventSubscriptionsList", elemType: EventSubscription })
  eventSubscriptionsList?: EventSubscription[];

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;
}
