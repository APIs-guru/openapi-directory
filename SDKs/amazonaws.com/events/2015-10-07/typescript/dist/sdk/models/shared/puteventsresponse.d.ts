import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PutEventsResultEntry } from "./puteventsresultentry";
export declare class PutEventsResponse extends SpeakeasyBase {
    entries?: PutEventsResultEntry[];
    failedEntryCount?: number;
}
