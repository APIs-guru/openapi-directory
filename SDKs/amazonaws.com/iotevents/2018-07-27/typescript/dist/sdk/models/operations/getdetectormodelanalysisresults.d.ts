import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetDetectorModelAnalysisResultsPathParams extends SpeakeasyBase {
    analysisId: string;
}
export declare class GetDetectorModelAnalysisResultsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class GetDetectorModelAnalysisResultsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDetectorModelAnalysisResultsRequest extends SpeakeasyBase {
    pathParams: GetDetectorModelAnalysisResultsPathParams;
    queryParams: GetDetectorModelAnalysisResultsQueryParams;
    headers: GetDetectorModelAnalysisResultsHeaders;
}
export declare class GetDetectorModelAnalysisResultsResponse extends SpeakeasyBase {
    contentType: string;
    getDetectorModelAnalysisResultsResponse?: shared.GetDetectorModelAnalysisResultsResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
