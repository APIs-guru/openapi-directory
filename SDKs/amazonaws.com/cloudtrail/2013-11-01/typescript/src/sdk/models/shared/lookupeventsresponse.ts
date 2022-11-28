import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Event } from "./event";



// LookupEventsResponse
/** 
 * Contains a response to a LookupEvents action.
**/
export class LookupEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Events", elemType: Event })
  events?: Event[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
