import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAutoScalingGroupRecommendationsXAmzTargetEnum {
    ComputeOptimizerServiceGetAutoScalingGroupRecommendations = "ComputeOptimizerService.GetAutoScalingGroupRecommendations"
}
export declare class GetAutoScalingGroupRecommendationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAutoScalingGroupRecommendationsXAmzTargetEnum;
}
export declare class GetAutoScalingGroupRecommendationsRequest extends SpeakeasyBase {
    headers: GetAutoScalingGroupRecommendationsHeaders;
    request: shared.GetAutoScalingGroupRecommendationsRequest;
}
export declare class GetAutoScalingGroupRecommendationsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getAutoScalingGroupRecommendationsResponse?: shared.GetAutoScalingGroupRecommendationsResponse;
    internalServerException?: any;
    invalidParameterValueException?: any;
    missingAuthenticationToken?: any;
    optInRequiredException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
