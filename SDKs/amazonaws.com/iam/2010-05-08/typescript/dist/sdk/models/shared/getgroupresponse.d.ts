import { SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";
import { User } from "./user";
/**
 * Contains the response to a successful <a>GetGroup</a> request.
**/
export declare class GetGroupResponse extends SpeakeasyBase {
    group: Group;
    isTruncated?: boolean;
    marker?: string;
    users: User[];
}
