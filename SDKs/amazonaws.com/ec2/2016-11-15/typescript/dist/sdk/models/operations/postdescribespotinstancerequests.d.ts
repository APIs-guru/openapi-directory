import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeSpotInstanceRequestsActionEnum {
    DescribeSpotInstanceRequests = "DescribeSpotInstanceRequests"
}
export declare enum PostDescribeSpotInstanceRequestsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeSpotInstanceRequestsQueryParams extends SpeakeasyBase {
    action: PostDescribeSpotInstanceRequestsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeSpotInstanceRequestsVersionEnum;
}
export declare class PostDescribeSpotInstanceRequestsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeSpotInstanceRequestsRequest extends SpeakeasyBase {
    queryParams: PostDescribeSpotInstanceRequestsQueryParams;
    headers: PostDescribeSpotInstanceRequestsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeSpotInstanceRequestsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
