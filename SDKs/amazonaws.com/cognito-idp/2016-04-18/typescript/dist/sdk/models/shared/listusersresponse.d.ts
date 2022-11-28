import { SpeakeasyBase } from "../../../internal/utils";
import { UserType } from "./usertype";
/**
 * The response from the request to list users.
**/
export declare class ListUsersResponse extends SpeakeasyBase {
    paginationToken?: string;
    users?: UserType[];
}
