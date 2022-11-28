import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribePublicIpv4PoolsActionEnum {
    DescribePublicIpv4Pools = "DescribePublicIpv4Pools"
}
export declare enum PostDescribePublicIpv4PoolsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribePublicIpv4PoolsQueryParams extends SpeakeasyBase {
    action: PostDescribePublicIpv4PoolsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribePublicIpv4PoolsVersionEnum;
}
export declare class PostDescribePublicIpv4PoolsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribePublicIpv4PoolsRequest extends SpeakeasyBase {
    queryParams: PostDescribePublicIpv4PoolsQueryParams;
    headers: PostDescribePublicIpv4PoolsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribePublicIpv4PoolsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
