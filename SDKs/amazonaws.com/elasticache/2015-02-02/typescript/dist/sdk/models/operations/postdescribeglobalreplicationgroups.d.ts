import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeGlobalReplicationGroupsActionEnum {
    DescribeGlobalReplicationGroups = "DescribeGlobalReplicationGroups"
}
export declare enum PostDescribeGlobalReplicationGroupsVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class PostDescribeGlobalReplicationGroupsQueryParams extends SpeakeasyBase {
    action: PostDescribeGlobalReplicationGroupsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeGlobalReplicationGroupsVersionEnum;
}
export declare class PostDescribeGlobalReplicationGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeGlobalReplicationGroupsRequest extends SpeakeasyBase {
    queryParams: PostDescribeGlobalReplicationGroupsQueryParams;
    headers: PostDescribeGlobalReplicationGroupsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeGlobalReplicationGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
