import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventDescription } from "./eventdescription";



// EventDescriptionsMessage
/** 
 * Result message wrapping a list of event descriptions.
**/
export class EventDescriptionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EventDescription })
  events?: EventDescription[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
