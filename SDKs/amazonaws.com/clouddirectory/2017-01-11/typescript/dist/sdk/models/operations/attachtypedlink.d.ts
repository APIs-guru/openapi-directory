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
    accessDeniedException?: any;
    attachTypedLinkResponse?: shared.AttachTypedLinkResponse;
    contentType: string;
    directoryNotEnabledException?: any;
    facetValidationException?: any;
    internalServiceException?: any;
    invalidArnException?: any;
    invalidAttachmentException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
