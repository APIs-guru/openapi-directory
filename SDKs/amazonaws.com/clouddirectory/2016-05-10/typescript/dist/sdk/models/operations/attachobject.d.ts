import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AttachObjectHeaders extends SpeakeasyBase {
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
export declare class AttachObjectRequestBodyChildReference extends SpeakeasyBase {
    selector?: string;
}
/**
 * The reference that identifies an object.
**/
export declare class AttachObjectRequestBodyParentReference extends SpeakeasyBase {
    selector?: string;
}
export declare class AttachObjectRequestBody extends SpeakeasyBase {
    childReference: AttachObjectRequestBodyChildReference;
    linkName: string;
    parentReference: AttachObjectRequestBodyParentReference;
}
export declare class AttachObjectRequest extends SpeakeasyBase {
    headers: AttachObjectHeaders;
    request: AttachObjectRequestBody;
}
export declare class AttachObjectResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    attachObjectResponse?: shared.AttachObjectResponse;
    contentType: string;
    directoryNotEnabledException?: shared.DirectoryNotEnabledException;
    facetValidationException?: shared.FacetValidationException;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    invalidAttachmentException?: shared.InvalidAttachmentException;
    limitExceededException?: shared.LimitExceededException;
    linkNameAlreadyInUseException?: shared.LinkNameAlreadyInUseException;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
