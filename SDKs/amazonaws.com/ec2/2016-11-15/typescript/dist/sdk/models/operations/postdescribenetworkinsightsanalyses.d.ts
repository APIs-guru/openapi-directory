import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeNetworkInsightsAnalysesActionEnum {
    DescribeNetworkInsightsAnalyses = "DescribeNetworkInsightsAnalyses"
}
export declare enum PostDescribeNetworkInsightsAnalysesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDescribeNetworkInsightsAnalysesQueryParams extends SpeakeasyBase {
    action: PostDescribeNetworkInsightsAnalysesActionEnum;
    maxResults?: string;
    nextToken?: string;
    version: PostDescribeNetworkInsightsAnalysesVersionEnum;
}
export declare class PostDescribeNetworkInsightsAnalysesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeNetworkInsightsAnalysesRequest extends SpeakeasyBase {
    queryParams: PostDescribeNetworkInsightsAnalysesQueryParams;
    headers: PostDescribeNetworkInsightsAnalysesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeNetworkInsightsAnalysesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
