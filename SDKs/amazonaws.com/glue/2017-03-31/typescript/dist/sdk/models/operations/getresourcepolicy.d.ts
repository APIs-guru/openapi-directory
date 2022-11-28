import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetResourcePolicyXAmzTargetEnum {
    AwsGlueGetResourcePolicy = "AWSGlue.GetResourcePolicy"
}
export declare class GetResourcePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResourcePolicyXAmzTargetEnum;
}
export declare class GetResourcePolicyRequest extends SpeakeasyBase {
    headers: GetResourcePolicyHeaders;
    request: shared.GetResourcePolicyRequest;
}
export declare class GetResourcePolicyResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getResourcePolicyResponse?: shared.GetResourcePolicyResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
