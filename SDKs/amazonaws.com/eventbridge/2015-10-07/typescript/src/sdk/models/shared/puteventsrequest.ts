import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PutEventsRequestEntry } from "./puteventsrequestentry";


export class PutEventsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entries", elemType: shared.PutEventsRequestEntry })
  entries: PutEventsRequestEntry[];
}
