import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DetachObjectHeaders extends SpeakeasyBase {
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
export declare class DetachObjectRequestBodyParentReference extends SpeakeasyBase {
    selector?: string;
}
export declare class DetachObjectRequestBody extends SpeakeasyBase {
    linkName: string;
    parentReference: DetachObjectRequestBodyParentReference;
}
export declare class DetachObjectRequest extends SpeakeasyBase {
    headers: DetachObjectHeaders;
    request: DetachObjectRequestBody;
}
export declare class DetachObjectResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    detachObjectResponse?: shared.DetachObjectResponse;
    directoryNotEnabledException?: shared.DirectoryNotEnabledException;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    limitExceededException?: shared.LimitExceededException;
    notNodeException?: shared.NotNodeException;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
