import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeEventsActionEnum {
    DescribeEvents = "DescribeEvents"
}
export declare enum GetDescribeEventsSourceTypeEnum {
    CacheCluster = "cache-cluster",
    CacheParameterGroup = "cache-parameter-group",
    CacheSecurityGroup = "cache-security-group",
    CacheSubnetGroup = "cache-subnet-group",
    ReplicationGroup = "replication-group",
    User = "user",
    UserGroup = "user-group"
}
export declare enum GetDescribeEventsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetDescribeEventsQueryParams extends SpeakeasyBase {
    action: GetDescribeEventsActionEnum;
    duration?: number;
    endTime?: Date;
    marker?: string;
    maxRecords?: number;
    sourceIdentifier?: string;
    sourceType?: GetDescribeEventsSourceTypeEnum;
    startTime?: Date;
    version: GetDescribeEventsVersionEnum;
}
export declare class GetDescribeEventsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeEventsRequest extends SpeakeasyBase {
    queryParams: GetDescribeEventsQueryParams;
    headers: GetDescribeEventsHeaders;
}
export declare class GetDescribeEventsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
