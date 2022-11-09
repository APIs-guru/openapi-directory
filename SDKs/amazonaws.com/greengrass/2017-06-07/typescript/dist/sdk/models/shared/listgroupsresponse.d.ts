import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GroupInformation } from "./groupinformation";
export declare class ListGroupsResponse extends SpeakeasyBase {
    groups?: GroupInformation[];
    nextToken?: string;
}
