import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeNetworkInsightsPathsActionEnum {
    DescribeNetworkInsightsPaths = "DescribeNetworkInsightsPaths"
}
export declare enum PostDescribeNetworkInsightsPathsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeNetworkInsightsPathsQueryParams extends SpeakeasyBase {
    action: PostDescribeNetworkInsightsPathsActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeNetworkInsightsPathsVersionEnum;
}
export declare class PostDescribeNetworkInsightsPathsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeNetworkInsightsPathsRequest extends SpeakeasyBase {
    queryParams: PostDescribeNetworkInsightsPathsQueryParams;
    headers: PostDescribeNetworkInsightsPathsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeNetworkInsightsPathsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
