import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventInfo
/** 
 * Information about an event. The event might be a push, pull request, scheduled request, or another type of event.
**/
export class EventInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: string;
}
