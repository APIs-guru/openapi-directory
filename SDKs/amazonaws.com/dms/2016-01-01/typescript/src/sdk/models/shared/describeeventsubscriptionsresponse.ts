import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventSubscription } from "./eventsubscription";


// DescribeEventSubscriptionsResponse
/** 
 * <p/>
**/
export class DescribeEventSubscriptionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventSubscriptionsList", elemType: shared.EventSubscription })
  eventSubscriptionsList?: EventSubscription[];

  @Metadata({ data: "json, name=Marker" })
  marker?: string;
}
