import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupNameAndArn } from "./groupnameandarn";



export class ListThingGroupsForThingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=thingGroups", elemType: GroupNameAndArn })
  thingGroups?: GroupNameAndArn[];
}
