import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionSummary } from "./connectionsummary";
export declare class ListConnectionsResponse extends SpeakeasyBase {
    connectionSummaryList: ConnectionSummary[];
    nextToken?: string;
}
