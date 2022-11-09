import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetEbsVolumeRecommendationsXAmzTargetEnum {
    ComputeOptimizerServiceGetEbsVolumeRecommendations = "ComputeOptimizerService.GetEBSVolumeRecommendations"
}
export declare class GetEbsVolumeRecommendationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetEbsVolumeRecommendationsXAmzTargetEnum;
}
export declare class GetEbsVolumeRecommendationsRequest extends SpeakeasyBase {
    headers: GetEbsVolumeRecommendationsHeaders;
    request: shared.GetEbsVolumeRecommendationsRequest;
}
export declare class GetEbsVolumeRecommendationsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getEbsVolumeRecommendationsResponse?: shared.GetEbsVolumeRecommendationsResponse;
    internalServerException?: any;
    invalidParameterValueException?: any;
    missingAuthenticationToken?: any;
    optInRequiredException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
