import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventSubscription } from "./eventsubscription";



export class RemoveSourceIdentifierFromSubscriptionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  eventSubscription?: EventSubscription;
}
