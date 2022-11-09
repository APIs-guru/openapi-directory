import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateDynamicThingGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=indexName" })
  indexName?: string;

  @Metadata({ data: "json, name=queryString" })
  queryString?: string;

  @Metadata({ data: "json, name=queryVersion" })
  queryVersion?: string;

  @Metadata({ data: "json, name=thingGroupArn" })
  thingGroupArn?: string;

  @Metadata({ data: "json, name=thingGroupId" })
  thingGroupId?: string;

  @Metadata({ data: "json, name=thingGroupName" })
  thingGroupName?: string;
}
