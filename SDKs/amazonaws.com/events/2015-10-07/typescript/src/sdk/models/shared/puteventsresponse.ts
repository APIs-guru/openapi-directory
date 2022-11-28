import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PutEventsResultEntry } from "./puteventsresultentry";



export class PutEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entries", elemType: PutEventsResultEntry })
  entries?: PutEventsResultEntry[];

  @SpeakeasyMetadata({ data: "json, name=FailedEntryCount" })
  failedEntryCount?: number;
}
