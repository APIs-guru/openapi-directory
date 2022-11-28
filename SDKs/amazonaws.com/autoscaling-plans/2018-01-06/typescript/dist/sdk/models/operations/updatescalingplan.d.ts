import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateScalingPlanXAmzTargetEnum {
    AnyScaleScalingPlannerFrontendServiceUpdateScalingPlan = "AnyScaleScalingPlannerFrontendService.UpdateScalingPlan"
}
export declare class UpdateScalingPlanHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateScalingPlanXAmzTargetEnum;
}
export declare class UpdateScalingPlanRequest extends SpeakeasyBase {
    headers: UpdateScalingPlanHeaders;
    request: shared.UpdateScalingPlanRequest;
}
export declare class UpdateScalingPlanResponse extends SpeakeasyBase {
    concurrentUpdateException?: any;
    contentType: string;
    internalServiceException?: any;
    objectNotFoundException?: any;
    statusCode: number;
    updateScalingPlanResponse?: Map<string, any>;
    validationException?: any;
}
