import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PutEventsRequestEntry } from "./puteventsrequestentry";



export class PutEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entries", elemType: PutEventsRequestEntry })
  entries: PutEventsRequestEntry[];
}
