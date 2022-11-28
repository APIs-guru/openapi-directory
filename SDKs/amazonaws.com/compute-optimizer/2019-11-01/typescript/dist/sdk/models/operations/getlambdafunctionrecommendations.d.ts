import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetLambdaFunctionRecommendationsXAmzTargetEnum {
    ComputeOptimizerServiceGetLambdaFunctionRecommendations = "ComputeOptimizerService.GetLambdaFunctionRecommendations"
}
export declare class GetLambdaFunctionRecommendationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLambdaFunctionRecommendationsXAmzTargetEnum;
}
export declare class GetLambdaFunctionRecommendationsRequest extends SpeakeasyBase {
    headers: GetLambdaFunctionRecommendationsHeaders;
    request: shared.GetLambdaFunctionRecommendationsRequest;
}
export declare class GetLambdaFunctionRecommendationsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getLambdaFunctionRecommendationsResponse?: shared.GetLambdaFunctionRecommendationsResponse;
    internalServerException?: any;
    invalidParameterValueException?: any;
    limitExceededException?: any;
    missingAuthenticationToken?: any;
    optInRequiredException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
