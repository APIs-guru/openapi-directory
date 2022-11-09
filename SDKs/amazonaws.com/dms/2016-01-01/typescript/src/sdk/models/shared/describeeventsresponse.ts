import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Event } from "./event";


// DescribeEventsResponse
/** 
 * <p/>
**/
export class DescribeEventsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Events", elemType: shared.Event })
  events?: Event[];

  @Metadata({ data: "json, name=Marker" })
  marker?: string;
}
