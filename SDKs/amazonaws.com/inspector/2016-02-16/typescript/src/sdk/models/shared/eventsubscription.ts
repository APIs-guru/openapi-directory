import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InspectorEventEnum } from "./inspectoreventenum";



// EventSubscription
/** 
 * This data type is used in the <a>Subscription</a> data type.
**/
export class EventSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event" })
  event: InspectorEventEnum;

  @SpeakeasyMetadata({ data: "json, name=subscribedAt" })
  subscribedAt: Date;
}
