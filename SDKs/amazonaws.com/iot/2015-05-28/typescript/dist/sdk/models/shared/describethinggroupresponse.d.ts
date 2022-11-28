import { SpeakeasyBase } from "../../../internal/utils";
import { DynamicGroupStatusEnum } from "./dynamicgroupstatusenum";
import { ThingGroupMetadata } from "./thinggroupmetadata";
import { ThingGroupProperties } from "./thinggroupproperties";
export declare class DescribeThingGroupResponse extends SpeakeasyBase {
    indexName?: string;
    queryString?: string;
    queryVersion?: string;
    status?: DynamicGroupStatusEnum;
    thingGroupArn?: string;
    thingGroupId?: string;
    thingGroupMetadata?: ThingGroupMetadata;
    thingGroupName?: string;
    thingGroupProperties?: ThingGroupProperties;
    version?: number;
}
