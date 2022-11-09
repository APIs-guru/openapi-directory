import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeIpv6PoolsActionEnum {
    DescribeIpv6Pools = "DescribeIpv6Pools"
}
export declare enum PostDescribeIpv6PoolsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeIpv6PoolsQueryParams extends SpeakeasyBase {
    action: PostDescribeIpv6PoolsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeIpv6PoolsVersionEnum;
}
export declare class PostDescribeIpv6PoolsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeIpv6PoolsRequest extends SpeakeasyBase {
    queryParams: PostDescribeIpv6PoolsQueryParams;
    headers: PostDescribeIpv6PoolsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeIpv6PoolsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
