import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Event } from "./event";



export class DescribeEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Events", elemType: Event })
  events?: Event[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
