import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRecommendationSummariesXAmzTargetEnum {
    ComputeOptimizerServiceGetRecommendationSummaries = "ComputeOptimizerService.GetRecommendationSummaries"
}
export declare class GetRecommendationSummariesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRecommendationSummariesXAmzTargetEnum;
}
export declare class GetRecommendationSummariesRequest extends SpeakeasyBase {
    headers: GetRecommendationSummariesHeaders;
    request: shared.GetRecommendationSummariesRequest;
}
export declare class GetRecommendationSummariesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getRecommendationSummariesResponse?: shared.GetRecommendationSummariesResponse;
    internalServerException?: any;
    invalidParameterValueException?: any;
    missingAuthenticationToken?: any;
    optInRequiredException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
