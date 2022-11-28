import { SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";
/**
 * Contains the response to a successful <a>ListGroupsForUser</a> request.
**/
export declare class ListGroupsForUserResponse extends SpeakeasyBase {
    groups: Group[];
    isTruncated?: boolean;
    marker?: string;
}
