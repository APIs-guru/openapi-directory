import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteScalingPolicyXAmzTargetEnum {
    GameLiftDeleteScalingPolicy = "GameLift.DeleteScalingPolicy"
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
    request: shared.DeleteScalingPolicyInput;
}
export declare class DeleteScalingPolicyResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
