import { SpeakeasyBase } from "../../../internal/utils";
import { Role } from "./role";
/**
 * Contains the response to a successful <a>ListRoles</a> request.
**/
export declare class ListRolesResponse extends SpeakeasyBase {
    isTruncated?: boolean;
    marker?: string;
    roles: Role[];
}
