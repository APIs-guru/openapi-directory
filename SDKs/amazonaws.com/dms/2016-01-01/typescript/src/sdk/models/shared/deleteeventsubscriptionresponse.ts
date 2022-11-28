import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventSubscription } from "./eventsubscription";



// DeleteEventSubscriptionResponse
/** 
 * <p/>
**/
export class DeleteEventSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventSubscription" })
  eventSubscription?: EventSubscription;
}
