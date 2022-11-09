import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RemoveTargetsResultEntry } from "./removetargetsresultentry";


export class RemoveTargetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FailedEntries", elemType: shared.RemoveTargetsResultEntry })
  failedEntries?: RemoveTargetsResultEntry[];

  @Metadata({ data: "json, name=FailedEntryCount" })
  failedEntryCount?: number;
}
