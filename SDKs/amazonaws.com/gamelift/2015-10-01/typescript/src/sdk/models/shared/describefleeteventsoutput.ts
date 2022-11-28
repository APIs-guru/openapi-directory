import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Event } from "./event";



// DescribeFleetEventsOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeFleetEventsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Events", elemType: Event })
  events?: Event[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
