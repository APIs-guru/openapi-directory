import { SpeakeasyBase } from "../../../internal/utils";
import { UserType } from "./usertype";
export declare class ListUsersInGroupResponse extends SpeakeasyBase {
    nextToken?: string;
    users?: UserType[];
}
