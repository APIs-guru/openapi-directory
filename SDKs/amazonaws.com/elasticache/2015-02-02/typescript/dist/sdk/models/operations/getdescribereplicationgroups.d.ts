import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeReplicationGroupsActionEnum {
    DescribeReplicationGroups = "DescribeReplicationGroups"
}
export declare enum GetDescribeReplicationGroupsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetDescribeReplicationGroupsQueryParams extends SpeakeasyBase {
    action: GetDescribeReplicationGroupsActionEnum;
    marker?: string;
    maxRecords?: number;
    replicationGroupId?: string;
    version: GetDescribeReplicationGroupsVersionEnum;
}
export declare class GetDescribeReplicationGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeReplicationGroupsRequest extends SpeakeasyBase {
    queryParams: GetDescribeReplicationGroupsQueryParams;
    headers: GetDescribeReplicationGroupsHeaders;
}
export declare class GetDescribeReplicationGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
