import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PutTargetsResultEntry } from "./puttargetsresultentry";


export class PutTargetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FailedEntries", elemType: shared.PutTargetsResultEntry })
  failedEntries?: PutTargetsResultEntry[];

  @Metadata({ data: "json, name=FailedEntryCount" })
  failedEntryCount?: number;
}
