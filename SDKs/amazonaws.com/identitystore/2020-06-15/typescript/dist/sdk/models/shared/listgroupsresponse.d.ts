import { SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";
export declare class ListGroupsResponse extends SpeakeasyBase {
    groups: Group[];
    nextToken?: string;
}
