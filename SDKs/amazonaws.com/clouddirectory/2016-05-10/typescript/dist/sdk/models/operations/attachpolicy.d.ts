import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AttachPolicyHeaders extends SpeakeasyBase {
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
export declare class AttachPolicyRequestBodyObjectReference extends SpeakeasyBase {
    selector?: string;
}
/**
 * The reference that identifies an object.
**/
export declare class AttachPolicyRequestBodyPolicyReference extends SpeakeasyBase {
    selector?: string;
}
export declare class AttachPolicyRequestBody extends SpeakeasyBase {
    objectReference: AttachPolicyRequestBodyObjectReference;
    policyReference: AttachPolicyRequestBodyPolicyReference;
}
export declare class AttachPolicyRequest extends SpeakeasyBase {
    headers: AttachPolicyHeaders;
    request: AttachPolicyRequestBody;
}
export declare class AttachPolicyResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    attachPolicyResponse?: Map<string, any>;
    contentType: string;
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
