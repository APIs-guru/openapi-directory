import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionSummary } from "./connectionsummary";
export declare class ListConnectionsResponse extends SpeakeasyBase {
    connectionSummaryList: ConnectionSummary[];
    nextToken?: string;
}
