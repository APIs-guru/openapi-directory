import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventSubscription } from "./eventsubscription";



// ModifyEventSubscriptionResponse
/** 
 * <p/>
**/
export class ModifyEventSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventSubscription" })
  eventSubscription?: EventSubscription;
}
