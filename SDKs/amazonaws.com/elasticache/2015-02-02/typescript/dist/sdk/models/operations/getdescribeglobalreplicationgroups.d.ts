import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeGlobalReplicationGroupsActionEnum {
    DescribeGlobalReplicationGroups = "DescribeGlobalReplicationGroups"
}
export declare enum GetDescribeGlobalReplicationGroupsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GetDescribeGlobalReplicationGroupsQueryParams extends SpeakeasyBase {
    action: GetDescribeGlobalReplicationGroupsActionEnum;
    globalReplicationGroupId?: string;
    marker?: string;
    maxRecords?: number;
    showMemberInfo?: boolean;
    version: GetDescribeGlobalReplicationGroupsVersionEnum;
}
export declare class GetDescribeGlobalReplicationGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeGlobalReplicationGroupsRequest extends SpeakeasyBase {
    queryParams: GetDescribeGlobalReplicationGroupsQueryParams;
    headers: GetDescribeGlobalReplicationGroupsHeaders;
}
export declare class GetDescribeGlobalReplicationGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
