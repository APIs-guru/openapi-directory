import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InspectorEventEnum } from "./inspectoreventenum";


// EventSubscription
/** 
 * This data type is used in the <a>Subscription</a> data type.
**/
export class EventSubscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=event" })
  event: InspectorEventEnum;

  @Metadata({ data: "json, name=subscribedAt" })
  subscribedAt: Date;
}
