import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchCreatePartitionXAmzTargetEnum {
    AwsGlueBatchCreatePartition = "AWSGlue.BatchCreatePartition"
}
export declare class BatchCreatePartitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchCreatePartitionXAmzTargetEnum;
}
export declare class BatchCreatePartitionRequest extends SpeakeasyBase {
    headers: BatchCreatePartitionHeaders;
    request: shared.BatchCreatePartitionRequest;
}
export declare class BatchCreatePartitionResponse extends SpeakeasyBase {
    alreadyExistsException?: any;
    batchCreatePartitionResponse?: shared.BatchCreatePartitionResponse;
    contentType: string;
    entityNotFoundException?: any;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    resourceNumberLimitExceededException?: any;
    statusCode: number;
}
