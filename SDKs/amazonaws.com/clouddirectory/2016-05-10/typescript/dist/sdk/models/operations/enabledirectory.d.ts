import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnableDirectoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
export declare class EnableDirectoryRequest extends SpeakeasyBase {
    headers: EnableDirectoryHeaders;
}
export declare class EnableDirectoryResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    directoryDeletedException?: shared.DirectoryDeletedException;
    enableDirectoryResponse?: shared.EnableDirectoryResponse;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    limitExceededException?: shared.LimitExceededException;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
