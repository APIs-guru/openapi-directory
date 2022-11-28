import { SpeakeasyBase } from "../../../internal/utils";
import { EventParameters } from "./eventparameters";
import { EventSourceValuesEnum } from "./eventsourcevaluesenum";
/**
 * Specifies an event that triggers an event-based policy.
**/
export declare class EventSource extends SpeakeasyBase {
    parameters?: EventParameters;
    type: EventSourceValuesEnum;
}
