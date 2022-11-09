import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ExportAutoScalingGroupRecommendationsXAmzTargetEnum {
    ComputeOptimizerServiceExportAutoScalingGroupRecommendations = "ComputeOptimizerService.ExportAutoScalingGroupRecommendations"
}
export declare class ExportAutoScalingGroupRecommendationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExportAutoScalingGroupRecommendationsXAmzTargetEnum;
}
export declare class ExportAutoScalingGroupRecommendationsRequest extends SpeakeasyBase {
    headers: ExportAutoScalingGroupRecommendationsHeaders;
    request: shared.ExportAutoScalingGroupRecommendationsRequest;
}
export declare class ExportAutoScalingGroupRecommendationsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    exportAutoScalingGroupRecommendationsResponse?: shared.ExportAutoScalingGroupRecommendationsResponse;
    internalServerException?: any;
    invalidParameterValueException?: any;
    limitExceededException?: any;
    missingAuthenticationToken?: any;
    optInRequiredException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
