import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AttachToIndexHeaders extends SpeakeasyBase {
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
export declare class AttachToIndexRequestBodyIndexReference extends SpeakeasyBase {
    selector?: string;
}
/**
 * The reference that identifies an object.
**/
export declare class AttachToIndexRequestBodyTargetReference extends SpeakeasyBase {
    selector?: string;
}
export declare class AttachToIndexRequestBody extends SpeakeasyBase {
    indexReference: AttachToIndexRequestBodyIndexReference;
    targetReference: AttachToIndexRequestBodyTargetReference;
}
export declare class AttachToIndexRequest extends SpeakeasyBase {
    headers: AttachToIndexHeaders;
    request: AttachToIndexRequestBody;
}
export declare class AttachToIndexResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    attachToIndexResponse?: shared.AttachToIndexResponse;
    contentType: string;
    directoryNotEnabledException?: shared.DirectoryNotEnabledException;
    indexedAttributeMissingException?: shared.IndexedAttributeMissingException;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    invalidAttachmentException?: shared.InvalidAttachmentException;
    limitExceededException?: shared.LimitExceededException;
    linkNameAlreadyInUseException?: shared.LinkNameAlreadyInUseException;
    notIndexException?: shared.NotIndexException;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
