import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AttachTypedLinkHeaders extends SpeakeasyBase {
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
export declare class AttachTypedLinkRequestBodySourceObjectReference extends SpeakeasyBase {
    selector?: string;
}
/**
 * The reference that identifies an object.
**/
export declare class AttachTypedLinkRequestBodyTargetObjectReference extends SpeakeasyBase {
    selector?: string;
}
/**
 * Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
**/
export declare class AttachTypedLinkRequestBodyTypedLinkFacet extends SpeakeasyBase {
    schemaArn?: string;
    typedLinkName?: string;
}
export declare class AttachTypedLinkRequestBody extends SpeakeasyBase {
    attributes: shared.AttributeNameAndValue[];
    sourceObjectReference: AttachTypedLinkRequestBodySourceObjectReference;
    targetObjectReference: AttachTypedLinkRequestBodyTargetObjectReference;
    typedLinkFacet: AttachTypedLinkRequestBodyTypedLinkFacet;
}
export declare class AttachTypedLinkRequest extends SpeakeasyBase {
    headers: AttachTypedLinkHeaders;
    request: AttachTypedLinkRequestBody;
}
export declare class AttachTypedLinkResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    attachTypedLinkResponse?: shared.AttachTypedLinkResponse;
    contentType: string;
    directoryNotEnabledException?: shared.DirectoryNotEnabledException;
    facetValidationException?: shared.FacetValidationException;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    invalidAttachmentException?: shared.InvalidAttachmentException;
    limitExceededException?: shared.LimitExceededException;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
