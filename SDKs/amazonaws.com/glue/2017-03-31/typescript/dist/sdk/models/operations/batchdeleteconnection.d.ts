import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchDeleteConnectionXAmzTargetEnum {
    AwsGlueBatchDeleteConnection = "AWSGlue.BatchDeleteConnection"
}
export declare class BatchDeleteConnectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDeleteConnectionXAmzTargetEnum;
}
export declare class BatchDeleteConnectionRequest extends SpeakeasyBase {
    headers: BatchDeleteConnectionHeaders;
    request: shared.BatchDeleteConnectionRequest;
}
export declare class BatchDeleteConnectionResponse extends SpeakeasyBase {
    batchDeleteConnectionResponse?: shared.BatchDeleteConnectionResponse;
    contentType: string;
    internalServiceException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
