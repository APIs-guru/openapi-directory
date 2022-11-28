import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventFilter
/** 
 * The event filter.
**/
export class EventFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Source" })
  source: string;
}
