import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchGetPartitionXAmzTargetEnum {
    AwsGlueBatchGetPartition = "AWSGlue.BatchGetPartition"
}
export declare class BatchGetPartitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetPartitionXAmzTargetEnum;
}
export declare class BatchGetPartitionRequest extends SpeakeasyBase {
    headers: BatchGetPartitionHeaders;
    request: shared.BatchGetPartitionRequest;
}
export declare class BatchGetPartitionResponse extends SpeakeasyBase {
    batchGetPartitionResponse?: shared.BatchGetPartitionResponse;
    contentType: string;
    entityNotFoundException?: any;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
