import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutScalingPolicyXAmzTargetEnum {
    AnyScaleFrontendServicePutScalingPolicy = "AnyScaleFrontendService.PutScalingPolicy"
}
export declare class PutScalingPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutScalingPolicyXAmzTargetEnum;
}
export declare class PutScalingPolicyRequest extends SpeakeasyBase {
    headers: PutScalingPolicyHeaders;
    request: shared.PutScalingPolicyRequest;
}
export declare class PutScalingPolicyResponse extends SpeakeasyBase {
    concurrentUpdateException?: any;
    contentType: string;
    failedResourceAccessException?: any;
    internalServiceException?: any;
    limitExceededException?: any;
    objectNotFoundException?: any;
    putScalingPolicyResponse?: shared.PutScalingPolicyResponse;
    statusCode: number;
    validationException?: any;
}
