import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PutPartnerEventsResultEntry } from "./putpartnereventsresultentry";


export class PutPartnerEventsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entries", elemType: shared.PutPartnerEventsResultEntry })
  entries?: PutPartnerEventsResultEntry[];

  @Metadata({ data: "json, name=FailedEntryCount" })
  failedEntryCount?: number;
}
