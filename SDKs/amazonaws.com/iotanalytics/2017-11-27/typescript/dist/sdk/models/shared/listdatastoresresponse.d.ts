import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DatastoreSummary } from "./datastoresummary";
export declare class ListDatastoresResponse extends SpeakeasyBase {
    datastoreSummaries?: DatastoreSummary[];
    nextToken?: string;
}
