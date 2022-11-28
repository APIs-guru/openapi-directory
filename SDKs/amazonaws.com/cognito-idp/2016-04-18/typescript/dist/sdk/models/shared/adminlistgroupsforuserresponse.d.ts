import { SpeakeasyBase } from "../../../internal/utils";
import { GroupType } from "./grouptype";
export declare class AdminListGroupsForUserResponse extends SpeakeasyBase {
    groups?: GroupType[];
    nextToken?: string;
}
