import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PutPartnerEventsRequestEntry } from "./putpartnereventsrequestentry";



export class PutPartnerEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entries", elemType: PutPartnerEventsRequestEntry })
  entries: PutPartnerEventsRequestEntry[];
}
