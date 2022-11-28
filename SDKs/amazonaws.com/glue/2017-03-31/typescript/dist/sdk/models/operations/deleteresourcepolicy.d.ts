import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteResourcePolicyXAmzTargetEnum {
    AwsGlueDeleteResourcePolicy = "AWSGlue.DeleteResourcePolicy"
}
export declare class DeleteResourcePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteResourcePolicyXAmzTargetEnum;
}
export declare class DeleteResourcePolicyRequest extends SpeakeasyBase {
    headers: DeleteResourcePolicyHeaders;
    request: shared.DeleteResourcePolicyRequest;
}
export declare class DeleteResourcePolicyResponse extends SpeakeasyBase {
    conditionCheckFailureException?: any;
    contentType: string;
    deleteResourcePolicyResponse?: Map<string, any>;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
