import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeSpotFleetRequestsActionEnum {
    DescribeSpotFleetRequests = "DescribeSpotFleetRequests"
}
export declare enum PostDescribeSpotFleetRequestsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeSpotFleetRequestsQueryParams extends SpeakeasyBase {
    action: PostDescribeSpotFleetRequestsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeSpotFleetRequestsVersionEnum;
}
export declare class PostDescribeSpotFleetRequestsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeSpotFleetRequestsRequest extends SpeakeasyBase {
    queryParams: PostDescribeSpotFleetRequestsQueryParams;
    headers: PostDescribeSpotFleetRequestsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeSpotFleetRequestsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
