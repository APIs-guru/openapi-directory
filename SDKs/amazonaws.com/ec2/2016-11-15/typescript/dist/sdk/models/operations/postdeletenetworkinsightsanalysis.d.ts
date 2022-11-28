import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteNetworkInsightsAnalysisActionEnum {
    DeleteNetworkInsightsAnalysis = "DeleteNetworkInsightsAnalysis"
}
export declare enum PostDeleteNetworkInsightsAnalysisVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class PostDeleteNetworkInsightsAnalysisQueryParams extends SpeakeasyBase {
    action: PostDeleteNetworkInsightsAnalysisActionEnum;
    version: PostDeleteNetworkInsightsAnalysisVersionEnum;
}
export declare class PostDeleteNetworkInsightsAnalysisHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteNetworkInsightsAnalysisRequest extends SpeakeasyBase {
    queryParams: PostDeleteNetworkInsightsAnalysisQueryParams;
    headers: PostDeleteNetworkInsightsAnalysisHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteNetworkInsightsAnalysisResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
