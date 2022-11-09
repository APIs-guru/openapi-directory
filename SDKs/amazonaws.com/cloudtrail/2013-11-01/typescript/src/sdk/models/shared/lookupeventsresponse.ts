import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Event } from "./event";


// LookupEventsResponse
/** 
 * Contains a response to a LookupEvents action.
**/
export class LookupEventsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Events", elemType: shared.Event })
  events?: Event[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
