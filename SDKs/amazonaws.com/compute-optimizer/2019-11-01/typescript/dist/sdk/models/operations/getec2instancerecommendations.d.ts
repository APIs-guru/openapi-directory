import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetEc2InstanceRecommendationsXAmzTargetEnum {
    ComputeOptimizerServiceGetEc2InstanceRecommendations = "ComputeOptimizerService.GetEC2InstanceRecommendations"
}
export declare class GetEc2InstanceRecommendationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetEc2InstanceRecommendationsXAmzTargetEnum;
}
export declare class GetEc2InstanceRecommendationsRequest extends SpeakeasyBase {
    headers: GetEc2InstanceRecommendationsHeaders;
    request: shared.GetEc2InstanceRecommendationsRequest;
}
export declare class GetEc2InstanceRecommendationsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getEc2InstanceRecommendationsResponse?: shared.GetEc2InstanceRecommendationsResponse;
    internalServerException?: any;
    invalidParameterValueException?: any;
    missingAuthenticationToken?: any;
    optInRequiredException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
