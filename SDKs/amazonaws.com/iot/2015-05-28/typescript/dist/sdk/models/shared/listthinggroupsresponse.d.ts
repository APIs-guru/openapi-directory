import { SpeakeasyBase } from "../../../internal/utils";
import { GroupNameAndArn } from "./groupnameandarn";
export declare class ListThingGroupsResponse extends SpeakeasyBase {
    nextToken?: string;
    thingGroups?: GroupNameAndArn[];
}
