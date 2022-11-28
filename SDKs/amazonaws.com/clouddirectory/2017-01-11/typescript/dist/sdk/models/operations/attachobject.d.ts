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
    accessDeniedException?: any;
    attachObjectResponse?: shared.AttachObjectResponse;
    contentType: string;
    directoryNotEnabledException?: any;
    facetValidationException?: any;
    internalServiceException?: any;
    invalidArnException?: any;
    invalidAttachmentException?: any;
    limitExceededException?: any;
    linkNameAlreadyInUseException?: any;
    resourceNotFoundException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
