import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchUpdatePartitionXAmzTargetEnum {
    AwsGlueBatchUpdatePartition = "AWSGlue.BatchUpdatePartition"
}
export declare class BatchUpdatePartitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchUpdatePartitionXAmzTargetEnum;
}
export declare class BatchUpdatePartitionRequest extends SpeakeasyBase {
    headers: BatchUpdatePartitionHeaders;
    request: shared.BatchUpdatePartitionRequest;
}
export declare class BatchUpdatePartitionResponse extends SpeakeasyBase {
    batchUpdatePartitionResponse?: shared.BatchUpdatePartitionResponse;
    contentType: string;
    entityNotFoundException?: any;
    glueEncryptionException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
