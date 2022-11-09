import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteNetworkInsightsAnalysisActionEnum {
    DeleteNetworkInsightsAnalysis = "DeleteNetworkInsightsAnalysis"
}
export declare enum GetDeleteNetworkInsightsAnalysisVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GetDeleteNetworkInsightsAnalysisQueryParams extends SpeakeasyBase {
    action: GetDeleteNetworkInsightsAnalysisActionEnum;
    dryRun?: boolean;
    networkInsightsAnalysisId: string;
    version: GetDeleteNetworkInsightsAnalysisVersionEnum;
}
export declare class GetDeleteNetworkInsightsAnalysisHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteNetworkInsightsAnalysisRequest extends SpeakeasyBase {
    queryParams: GetDeleteNetworkInsightsAnalysisQueryParams;
    headers: GetDeleteNetworkInsightsAnalysisHeaders;
}
export declare class GetDeleteNetworkInsightsAnalysisResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
