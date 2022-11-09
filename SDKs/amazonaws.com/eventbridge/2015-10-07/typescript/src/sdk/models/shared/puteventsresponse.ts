import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PutEventsResultEntry } from "./puteventsresultentry";


export class PutEventsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entries", elemType: shared.PutEventsResultEntry })
  entries?: PutEventsResultEntry[];

  @Metadata({ data: "json, name=FailedEntryCount" })
  failedEntryCount?: number;
}
