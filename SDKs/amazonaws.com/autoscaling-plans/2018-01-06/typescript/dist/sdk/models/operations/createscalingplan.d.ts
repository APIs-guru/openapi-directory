import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateScalingPlanXAmzTargetEnum {
    AnyScaleScalingPlannerFrontendServiceCreateScalingPlan = "AnyScaleScalingPlannerFrontendService.CreateScalingPlan"
}
export declare class CreateScalingPlanHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateScalingPlanXAmzTargetEnum;
}
export declare class CreateScalingPlanRequest extends SpeakeasyBase {
    headers: CreateScalingPlanHeaders;
    request: shared.CreateScalingPlanRequest;
}
export declare class CreateScalingPlanResponse extends SpeakeasyBase {
    concurrentUpdateException?: any;
    contentType: string;
    createScalingPlanResponse?: shared.CreateScalingPlanResponse;
    internalServiceException?: any;
    limitExceededException?: any;
    statusCode: number;
    validationException?: any;
}
