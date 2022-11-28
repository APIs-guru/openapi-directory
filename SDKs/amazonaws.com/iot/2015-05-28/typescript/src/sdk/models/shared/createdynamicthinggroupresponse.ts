import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateDynamicThingGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=indexName" })
  indexName?: string;

  @SpeakeasyMetadata({ data: "json, name=queryString" })
  queryString?: string;

  @SpeakeasyMetadata({ data: "json, name=queryVersion" })
  queryVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=thingGroupArn" })
  thingGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=thingGroupId" })
  thingGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=thingGroupName" })
  thingGroupName?: string;
}
