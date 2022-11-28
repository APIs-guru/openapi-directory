import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DynamicGroupStatusEnum } from "./dynamicgroupstatusenum";
import { ThingGroupMetadata } from "./thinggroupmetadata";
import { ThingGroupProperties } from "./thinggroupproperties";



export class DescribeThingGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=indexName" })
  indexName?: string;

  @SpeakeasyMetadata({ data: "json, name=queryString" })
  queryString?: string;

  @SpeakeasyMetadata({ data: "json, name=queryVersion" })
  queryVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: DynamicGroupStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=thingGroupArn" })
  thingGroupArn?: string;

  @SpeakeasyMetadata({ data: "json, name=thingGroupId" })
  thingGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=thingGroupMetadata" })
  thingGroupMetadata?: ThingGroupMetadata;

  @SpeakeasyMetadata({ data: "json, name=thingGroupName" })
  thingGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=thingGroupProperties" })
  thingGroupProperties?: ThingGroupProperties;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
