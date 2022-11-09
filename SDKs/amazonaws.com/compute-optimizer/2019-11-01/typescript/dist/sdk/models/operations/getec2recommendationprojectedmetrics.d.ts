import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetEc2RecommendationProjectedMetricsXAmzTargetEnum {
    ComputeOptimizerServiceGetEc2RecommendationProjectedMetrics = "ComputeOptimizerService.GetEC2RecommendationProjectedMetrics"
}
export declare class GetEc2RecommendationProjectedMetricsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetEc2RecommendationProjectedMetricsXAmzTargetEnum;
}
export declare class GetEc2RecommendationProjectedMetricsRequest extends SpeakeasyBase {
    headers: GetEc2RecommendationProjectedMetricsHeaders;
    request: shared.GetEc2RecommendationProjectedMetricsRequest;
}
export declare class GetEc2RecommendationProjectedMetricsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getEc2RecommendationProjectedMetricsResponse?: shared.GetEc2RecommendationProjectedMetricsResponse;
    internalServerException?: any;
    invalidParameterValueException?: any;
    missingAuthenticationToken?: any;
    optInRequiredException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
