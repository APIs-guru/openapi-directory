import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventSubscription } from "./eventsubscription";



export class DeleteEventSubscriptionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  eventSubscription?: EventSubscription;
}
