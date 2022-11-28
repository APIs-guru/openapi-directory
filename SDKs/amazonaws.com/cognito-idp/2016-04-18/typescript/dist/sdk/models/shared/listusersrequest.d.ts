import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the request to list users.
**/
export declare class ListUsersRequest extends SpeakeasyBase {
    attributesToGet?: string[];
    filter?: string;
    limit?: number;
    paginationToken?: string;
    userPoolId: string;
}
