import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventSubscription } from "./eventsubscription";



// CreateEventSubscriptionResponse
/** 
 * <p/>
**/
export class CreateEventSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventSubscription" })
  eventSubscription?: EventSubscription;
}
