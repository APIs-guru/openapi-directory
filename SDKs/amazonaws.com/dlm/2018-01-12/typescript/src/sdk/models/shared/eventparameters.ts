import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EventTypeValuesEnum } from "./eventtypevaluesenum";


// EventParameters
/** 
 * Specifies an event that triggers an event-based policy.
**/
export class EventParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=DescriptionRegex" })
  descriptionRegex: string;

  @Metadata({ data: "json, name=EventType" })
  eventType: EventTypeValuesEnum;

  @Metadata({ data: "json, name=SnapshotOwner" })
  snapshotOwner: string[];
}
