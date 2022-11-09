import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PutPartnerEventsRequestEntry } from "./putpartnereventsrequestentry";


export class PutPartnerEventsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entries", elemType: shared.PutPartnerEventsRequestEntry })
  entries: PutPartnerEventsRequestEntry[];
}
