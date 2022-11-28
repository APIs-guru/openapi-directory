import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * Contains the response to a successful <a>ListUsers</a> request.
**/
export declare class ListUsersResponse extends SpeakeasyBase {
    isTruncated?: boolean;
    marker?: string;
    users: User[];
}
