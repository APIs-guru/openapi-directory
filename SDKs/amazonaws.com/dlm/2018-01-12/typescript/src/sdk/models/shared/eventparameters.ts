import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventTypeValuesEnum } from "./eventtypevaluesenum";



// EventParameters
/** 
 * Specifies an event that triggers an event-based policy.
**/
export class EventParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DescriptionRegex" })
  descriptionRegex: string;

  @SpeakeasyMetadata({ data: "json, name=EventType" })
  eventType: EventTypeValuesEnum;

  @SpeakeasyMetadata({ data: "json, name=SnapshotOwner" })
  snapshotOwner: string[];
}
