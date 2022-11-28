import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PutTargetsResultEntry } from "./puttargetsresultentry";



export class PutTargetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FailedEntries", elemType: PutTargetsResultEntry })
  failedEntries?: PutTargetsResultEntry[];

  @SpeakeasyMetadata({ data: "json, name=FailedEntryCount" })
  failedEntryCount?: number;
}
