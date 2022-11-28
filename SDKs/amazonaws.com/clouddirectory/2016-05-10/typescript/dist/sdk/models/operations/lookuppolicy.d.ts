import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LookupPolicyQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class LookupPolicyHeaders extends SpeakeasyBase {
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
export declare class LookupPolicyRequestBodyObjectReference extends SpeakeasyBase {
    selector?: string;
}
export declare class LookupPolicyRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    objectReference: LookupPolicyRequestBodyObjectReference;
}
export declare class LookupPolicyRequest extends SpeakeasyBase {
    queryParams: LookupPolicyQueryParams;
    headers: LookupPolicyHeaders;
    request: LookupPolicyRequestBody;
}
export declare class LookupPolicyResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    directoryNotEnabledException?: shared.DirectoryNotEnabledException;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    invalidNextTokenException?: shared.InvalidNextTokenException;
    limitExceededException?: shared.LimitExceededException;
    lookupPolicyResponse?: shared.LookupPolicyResponse;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
