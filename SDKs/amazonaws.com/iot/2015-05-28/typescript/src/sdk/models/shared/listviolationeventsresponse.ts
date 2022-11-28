import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ViolationEvent } from "./violationevent";



export class ListViolationEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=violationEvents", elemType: ViolationEvent })
  violationEvents?: ViolationEvent[];
}
