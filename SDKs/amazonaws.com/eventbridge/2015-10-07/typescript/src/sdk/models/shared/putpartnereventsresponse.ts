import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PutPartnerEventsResultEntry } from "./putpartnereventsresultentry";



export class PutPartnerEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entries", elemType: PutPartnerEventsResultEntry })
  entries?: PutPartnerEventsResultEntry[];

  @SpeakeasyMetadata({ data: "json, name=FailedEntryCount" })
  failedEntryCount?: number;
}
