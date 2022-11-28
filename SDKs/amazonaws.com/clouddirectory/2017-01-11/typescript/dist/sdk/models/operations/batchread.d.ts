import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchReadXAmzConsistencyLevelEnum {
    Serializable = "SERIALIZABLE",
    Eventual = "EVENTUAL"
}
export declare class BatchReadHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzConsistencyLevel?: BatchReadXAmzConsistencyLevelEnum;
    xAmzDataPartition: string;
}
export declare class BatchReadRequestBody extends SpeakeasyBase {
    operations: shared.BatchReadOperation[];
}
export declare class BatchReadRequest extends SpeakeasyBase {
    headers: BatchReadHeaders;
    request: BatchReadRequestBody;
}
export declare class BatchReadResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    batchReadResponse?: shared.BatchReadResponse;
    contentType: string;
    directoryNotEnabledException?: any;
    internalServiceException?: any;
    invalidArnException?: any;
    limitExceededException?: any;
    retryableConflictException?: any;
    statusCode: number;
    validationException?: any;
}
