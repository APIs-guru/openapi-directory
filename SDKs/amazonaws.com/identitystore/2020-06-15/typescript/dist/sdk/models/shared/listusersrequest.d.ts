import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
export declare class ListUsersRequest extends SpeakeasyBase {
    filters?: Filter[];
    identityStoreId: string;
    maxResults?: number;
    nextToken?: string;
}
