import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PutTargetsResultEntry } from "./puttargetsresultentry";
export declare class PutTargetsResponse extends SpeakeasyBase {
    failedEntries?: PutTargetsResultEntry[];
    failedEntryCount?: number;
}
