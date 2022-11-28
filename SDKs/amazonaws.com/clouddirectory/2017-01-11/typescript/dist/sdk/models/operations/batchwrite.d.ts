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
    accessDeniedException?: any;
    batchWriteException?: any;
    batchWriteResponse?: shared.BatchWriteResponse;
    contentType: string;
    directoryNotEnabledException?: any;
    internalServiceException?: any;
    invalidArnException?: any;
    limitExceededException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
