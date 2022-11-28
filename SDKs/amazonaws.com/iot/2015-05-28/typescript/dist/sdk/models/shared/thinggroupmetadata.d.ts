import { SpeakeasyBase } from "../../../internal/utils";
import { GroupNameAndArn } from "./groupnameandarn";
/**
 * Thing group metadata.
**/
export declare class ThingGroupMetadata extends SpeakeasyBase {
    creationDate?: Date;
    parentGroupName?: string;
    rootToParentThingGroups?: GroupNameAndArn[];
}
