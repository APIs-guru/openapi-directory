import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ViolationEvent } from "./violationevent";


export class ListViolationEventsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=violationEvents", elemType: shared.ViolationEvent })
  violationEvents?: ViolationEvent[];
}
