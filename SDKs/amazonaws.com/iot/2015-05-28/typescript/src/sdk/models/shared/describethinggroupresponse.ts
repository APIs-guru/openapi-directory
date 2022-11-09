import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DynamicGroupStatusEnum } from "./dynamicgroupstatusenum";
import { ThingGroupMetadata } from "./thinggroupmetadata";
import { ThingGroupProperties } from "./thinggroupproperties";


export class DescribeThingGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=indexName" })
  indexName?: string;

  @Metadata({ data: "json, name=queryString" })
  queryString?: string;

  @Metadata({ data: "json, name=queryVersion" })
  queryVersion?: string;

  @Metadata({ data: "json, name=status" })
  status?: DynamicGroupStatusEnum;

  @Metadata({ data: "json, name=thingGroupArn" })
  thingGroupArn?: string;

  @Metadata({ data: "json, name=thingGroupId" })
  thingGroupId?: string;

  @Metadata({ data: "json, name=thingGroupMetadata" })
  thingGroupMetadata?: ThingGroupMetadata;

  @Metadata({ data: "json, name=thingGroupName" })
  thingGroupName?: string;

  @Metadata({ data: "json, name=thingGroupProperties" })
  thingGroupProperties?: ThingGroupProperties;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
