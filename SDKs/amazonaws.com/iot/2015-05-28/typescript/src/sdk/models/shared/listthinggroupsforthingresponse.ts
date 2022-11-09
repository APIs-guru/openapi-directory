import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GroupNameAndArn } from "./groupnameandarn";


export class ListThingGroupsForThingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=thingGroups", elemType: shared.GroupNameAndArn })
  thingGroups?: GroupNameAndArn[];
}
