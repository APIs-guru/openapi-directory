import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EventSubscription } from "./eventsubscription";


// ModifyEventSubscriptionResponse
/** 
 * <p/>
**/
export class ModifyEventSubscriptionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=EventSubscription" })
  eventSubscription?: EventSubscription;
}
