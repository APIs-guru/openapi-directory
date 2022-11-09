import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GroupNameAndArn } from "./groupnameandarn";


// ThingGroupMetadata
/** 
 * Thing group metadata.
**/
export class ThingGroupMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=parentGroupName" })
  parentGroupName?: string;

  @Metadata({ data: "json, name=rootToParentThingGroups", elemType: shared.GroupNameAndArn })
  rootToParentThingGroups?: GroupNameAndArn[];
}
