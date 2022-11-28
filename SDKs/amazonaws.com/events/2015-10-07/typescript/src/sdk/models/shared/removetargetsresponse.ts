import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RemoveTargetsResultEntry } from "./removetargetsresultentry";



export class RemoveTargetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FailedEntries", elemType: RemoveTargetsResultEntry })
  failedEntries?: RemoveTargetsResultEntry[];

  @SpeakeasyMetadata({ data: "json, name=FailedEntryCount" })
  failedEntryCount?: number;
}
