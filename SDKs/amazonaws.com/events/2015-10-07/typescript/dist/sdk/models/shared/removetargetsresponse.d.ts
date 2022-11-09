import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RemoveTargetsResultEntry } from "./removetargetsresultentry";
export declare class RemoveTargetsResponse extends SpeakeasyBase {
    failedEntries?: RemoveTargetsResultEntry[];
    failedEntryCount?: number;
}
