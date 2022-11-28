import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteScalingPolicyXAmzTargetEnum {
    AnyScaleFrontendServiceDeleteScalingPolicy = "AnyScaleFrontendService.DeleteScalingPolicy"
}
export declare class DeleteScalingPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteScalingPolicyXAmzTargetEnum;
}
export declare class DeleteScalingPolicyRequest extends SpeakeasyBase {
    headers: DeleteScalingPolicyHeaders;
    request: shared.DeleteScalingPolicyRequest;
}
export declare class DeleteScalingPolicyResponse extends SpeakeasyBase {
    concurrentUpdateException?: any;
    contentType: string;
    deleteScalingPolicyResponse?: Map<string, any>;
    internalServiceException?: any;
    objectNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
