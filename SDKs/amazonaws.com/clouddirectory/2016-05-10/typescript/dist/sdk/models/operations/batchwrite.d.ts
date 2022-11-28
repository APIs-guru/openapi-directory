import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchWriteHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzDataPartition: string;
}
export declare class BatchWriteRequestBody extends SpeakeasyBase {
    operations: shared.BatchWriteOperation[];
}
export declare class BatchWriteRequest extends SpeakeasyBase {
    headers: BatchWriteHeaders;
    request: BatchWriteRequestBody;
}
export declare class BatchWriteResponse extends SpeakeasyBase {
    accessDeniedException?: shared.AccessDeniedException;
    batchWriteException?: shared.BatchWriteException;
    batchWriteResponse?: shared.BatchWriteResponse;
    contentType: string;
    directoryNotEnabledException?: shared.DirectoryNotEnabledException;
    internalServiceException?: shared.InternalServiceException;
    invalidArnException?: shared.InvalidArnException;
    limitExceededException?: shared.LimitExceededException;
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    validationException?: shared.ValidationException;
}
