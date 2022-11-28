import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Event } from "./event";



// EventsMessage
/** 
 * Represents the output of <a>DescribeEvents</a>.
**/
export class EventsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Event })
  events?: Event[];

  @SpeakeasyMetadata()
  marker?: string;
}
