import { SpeakeasyBase } from "../../../internal/utils";
import { ProtocolsListDataSummary } from "./protocolslistdatasummary";
export declare class ListProtocolsListsResponse extends SpeakeasyBase {
    nextToken?: string;
    protocolsLists?: ProtocolsListDataSummary[];
}
