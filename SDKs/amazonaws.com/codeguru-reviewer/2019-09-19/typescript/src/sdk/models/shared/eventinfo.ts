import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EventInfo
/** 
 * Information about an event. The event might be a push, pull request, scheduled request, or another type of event.
**/
export class EventInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=State" })
  state?: string;
}
