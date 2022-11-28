import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateThingGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=thingGroupArn" })
  thingGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=thingGroupId" })
  thingGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=thingGroupName" })
  thingGroupName?: string;
}
