import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteObjectHeaders extends SpeakeasyBase {
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
export declare class DeleteObjectRequestBodyObjectReference extends SpeakeasyBase {
    selector?: string;
}
export declare class DeleteObjectRequestBody extends SpeakeasyBase {
    objectReference: DeleteObjectRequestBodyObjectReference;
}
export declare class DeleteObjectRequest extends SpeakeasyBase {
    headers: DeleteObjectHeaders;
    request: DeleteObjectRequestBody;
}
export declare class DeleteObjectResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    deleteObjectResponse?: Map<string, any>;
    directoryNotEnabledException?: shared.DirectoryNotEnabledException;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    limitExceededException?: shared.LimitExceededException;
    objectNotDetachedException?: shared.ObjectNotDetachedException;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
