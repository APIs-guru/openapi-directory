import { SpeakeasyBase } from "../../../internal/utils";
import { GetConnectionsFilter } from "./getconnectionsfilter";
export declare class GetConnectionsRequest extends SpeakeasyBase {
    catalogId?: string;
    filter?: GetConnectionsFilter;
    hidePassword?: boolean;
    maxResults?: number;
    nextToken?: string;
}
