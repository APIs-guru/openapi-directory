import { SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";
/**
 * Contains the response to a successful <a>ListGroups</a> request.
**/
export declare class ListGroupsResponse extends SpeakeasyBase {
    groups: Group[];
    isTruncated?: boolean;
    marker?: string;
}
