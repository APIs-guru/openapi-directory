import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Filter } from "./filter";
export declare class ListGroupsRequest extends SpeakeasyBase {
    filters?: Filter[];
    identityStoreId: string;
    maxResults?: number;
    nextToken?: string;
}
