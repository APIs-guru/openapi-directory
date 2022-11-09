import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EventParameters } from "./eventparameters";
import { EventSourceValuesEnum } from "./eventsourcevaluesenum";


// EventSource
/** 
 * Specifies an event that triggers an event-based policy.
**/
export class EventSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=Parameters" })
  parameters?: EventParameters;

  @Metadata({ data: "json, name=Type" })
  type: EventSourceValuesEnum;
}
