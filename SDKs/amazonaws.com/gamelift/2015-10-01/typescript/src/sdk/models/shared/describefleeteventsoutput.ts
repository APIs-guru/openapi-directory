import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Event } from "./event";


// DescribeFleetEventsOutput
/** 
 * Represents the returned data in response to a request operation.
**/
export class DescribeFleetEventsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Events", elemType: shared.Event })
  events?: Event[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
