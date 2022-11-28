import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Event } from "./event";



// DescribeEventsResponse
/** 
 * <p/>
**/
export class DescribeEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Events", elemType: Event })
  events?: Event[];

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;
}
