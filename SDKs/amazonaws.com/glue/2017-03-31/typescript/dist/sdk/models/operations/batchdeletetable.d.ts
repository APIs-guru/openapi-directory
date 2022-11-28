import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchDeleteTableXAmzTargetEnum {
    AwsGlueBatchDeleteTable = "AWSGlue.BatchDeleteTable"
}
export declare class BatchDeleteTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDeleteTableXAmzTargetEnum;
}
export declare class BatchDeleteTableRequest extends SpeakeasyBase {
    headers: BatchDeleteTableHeaders;
    request: shared.BatchDeleteTableRequest;
}
export declare class BatchDeleteTableResponse extends SpeakeasyBase {
    batchDeleteTableResponse?: shared.BatchDeleteTableResponse;
    contentType: string;
    entityNotFoundException?: any;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
