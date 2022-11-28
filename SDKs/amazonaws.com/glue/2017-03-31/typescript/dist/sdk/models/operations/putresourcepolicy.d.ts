import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutResourcePolicyXAmzTargetEnum {
    AwsGluePutResourcePolicy = "AWSGlue.PutResourcePolicy"
}
export declare class PutResourcePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutResourcePolicyXAmzTargetEnum;
}
export declare class PutResourcePolicyRequest extends SpeakeasyBase {
    headers: PutResourcePolicyHeaders;
    request: shared.PutResourcePolicyRequest;
}
export declare class PutResourcePolicyResponse extends SpeakeasyBase {
    conditionCheckFailureException?: any;
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    putResourcePolicyResponse?: shared.PutResourcePolicyResponse;
    statusCode: number;
}
