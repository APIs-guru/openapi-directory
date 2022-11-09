import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteScalingPlanXAmzTargetEnum {
    AnyScaleScalingPlannerFrontendServiceDeleteScalingPlan = "AnyScaleScalingPlannerFrontendService.DeleteScalingPlan"
}
export declare class DeleteScalingPlanHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteScalingPlanXAmzTargetEnum;
}
export declare class DeleteScalingPlanRequest extends SpeakeasyBase {
    headers: DeleteScalingPlanHeaders;
    request: shared.DeleteScalingPlanRequest;
}
export declare class DeleteScalingPlanResponse extends SpeakeasyBase {
    concurrentUpdateException?: any;
    contentType: string;
    deleteScalingPlanResponse?: Map<string, any>;
    internalServiceException?: any;
    objectNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
