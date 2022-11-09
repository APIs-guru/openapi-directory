import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EventSubscription } from "./eventsubscription";


// DeleteEventSubscriptionResponse
/** 
 * <p/>
**/
export class DeleteEventSubscriptionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventSubscription" })
  eventSubscription?: EventSubscription;
}
