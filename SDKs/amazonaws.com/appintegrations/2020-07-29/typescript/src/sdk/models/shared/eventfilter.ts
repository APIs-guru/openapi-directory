import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EventFilter
/** 
 * The event filter.
**/
export class EventFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Source" })
  source: string;
}
