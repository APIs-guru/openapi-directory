import { SpeakeasyBase } from "../../../internal/utils";
import { GroupNameAndArn } from "./groupnameandarn";
export declare class ListThingGroupsForThingResponse extends SpeakeasyBase {
    nextToken?: string;
    thingGroups?: GroupNameAndArn[];
}
