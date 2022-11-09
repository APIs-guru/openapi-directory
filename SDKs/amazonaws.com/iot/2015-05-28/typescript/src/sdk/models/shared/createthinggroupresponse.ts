import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateThingGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=thingGroupArn" })
  thingGroupArn?: string;

  @Metadata({ data: "json, name=thingGroupId" })
  thingGroupId?: string;

  @Metadata({ data: "json, name=thingGroupName" })
  thingGroupName?: string;
}
