import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDirectoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
export declare class CreateDirectoryRequestBody extends SpeakeasyBase {
    name: string;
}
export declare class CreateDirectoryRequest extends SpeakeasyBase {
    headers: CreateDirectoryHeaders;
    request: CreateDirectoryRequestBody;
}
export declare class CreateDirectoryResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    createDirectoryResponse?: shared.CreateDirectoryResponse;
    directoryAlreadyExistsException?: shared.DirectoryAlreadyExistsException;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    limitExceededException?: shared.LimitExceededException;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
