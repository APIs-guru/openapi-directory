import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchDeletePartitionXAmzTargetEnum {
    AwsGlueBatchDeletePartition = "AWSGlue.BatchDeletePartition"
}
export declare class BatchDeletePartitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDeletePartitionXAmzTargetEnum;
}
export declare class BatchDeletePartitionRequest extends SpeakeasyBase {
    headers: BatchDeletePartitionHeaders;
    request: shared.BatchDeletePartitionRequest;
}
export declare class BatchDeletePartitionResponse extends SpeakeasyBase {
    batchDeletePartitionResponse?: shared.BatchDeletePartitionResponse;
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
