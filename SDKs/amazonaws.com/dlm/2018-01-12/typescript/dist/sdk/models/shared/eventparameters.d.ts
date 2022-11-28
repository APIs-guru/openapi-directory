import { SpeakeasyBase } from "../../../internal/utils";
import { EventTypeValuesEnum } from "./eventtypevaluesenum";
/**
 * Specifies an event that triggers an event-based policy.
**/
export declare class EventParameters extends SpeakeasyBase {
    descriptionRegex: string;
    eventType: EventTypeValuesEnum;
    snapshotOwner: string[];
}
