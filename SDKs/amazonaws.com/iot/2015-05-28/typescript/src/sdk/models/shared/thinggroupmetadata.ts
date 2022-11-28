import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupNameAndArn } from "./groupnameandarn";



// ThingGroupMetadata
/** 
 * Thing group metadata.
**/
export class ThingGroupMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=parentGroupName" })
  parentGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=rootToParentThingGroups", elemType: GroupNameAndArn })
  rootToParentThingGroups?: GroupNameAndArn[];
}
