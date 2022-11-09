import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeReplicationGroupsActionEnum {
    DescribeReplicationGroups = "DescribeReplicationGroups"
}
export declare enum PostDescribeReplicationGroupsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostDescribeReplicationGroupsQueryParams extends SpeakeasyBase {
    action: PostDescribeReplicationGroupsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeReplicationGroupsVersionEnum;
}
export declare class PostDescribeReplicationGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeReplicationGroupsRequest extends SpeakeasyBase {
    queryParams: PostDescribeReplicationGroupsQueryParams;
    headers: PostDescribeReplicationGroupsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeReplicationGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
