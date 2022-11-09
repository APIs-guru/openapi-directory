import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EventSubscription } from "./eventsubscription";


// CreateEventSubscriptionResponse
/** 
 * <p/>
**/
export class CreateEventSubscriptionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventSubscription" })
  eventSubscription?: EventSubscription;
}
