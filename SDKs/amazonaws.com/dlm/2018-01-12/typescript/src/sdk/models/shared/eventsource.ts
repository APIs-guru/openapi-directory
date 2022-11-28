import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventParameters } from "./eventparameters";
import { EventSourceValuesEnum } from "./eventsourcevaluesenum";



// EventSource
/** 
 * Specifies an event that triggers an event-based policy.
**/
export class EventSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: EventParameters;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: EventSourceValuesEnum;
}
