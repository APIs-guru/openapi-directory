import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DetachPolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
/**
 * The reference that identifies an object.
**/
export declare class DetachPolicyRequestBodyObjectReference extends SpeakeasyBase {
    selector?: string;
}
/**
 * The reference that identifies an object.
**/
export declare class DetachPolicyRequestBodyPolicyReference extends SpeakeasyBase {
    selector?: string;
}
export declare class DetachPolicyRequestBody extends SpeakeasyBase {
    objectReference: DetachPolicyRequestBodyObjectReference;
    policyReference: DetachPolicyRequestBodyPolicyReference;
}
export declare class DetachPolicyRequest extends SpeakeasyBase {
    headers: DetachPolicyHeaders;
    request: DetachPolicyRequestBody;
}
export declare class DetachPolicyResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    detachPolicyResponse?: Map<string, any>;
    directoryNotEnabledException?: shared.DirectoryNotEnabledException;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    limitExceededException?: shared.LimitExceededException;
    notPolicyException?: shared.NotPolicyException;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
