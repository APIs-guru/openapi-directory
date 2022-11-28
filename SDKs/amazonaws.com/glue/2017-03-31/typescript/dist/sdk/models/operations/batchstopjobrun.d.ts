import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchStopJobRunXAmzTargetEnum {
    AwsGlueBatchStopJobRun = "AWSGlue.BatchStopJobRun"
}
export declare class BatchStopJobRunHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchStopJobRunXAmzTargetEnum;
}
export declare class BatchStopJobRunRequest extends SpeakeasyBase {
    headers: BatchStopJobRunHeaders;
    request: shared.BatchStopJobRunRequest;
}
export declare class BatchStopJobRunResponse extends SpeakeasyBase {
    batchStopJobRunResponse?: shared.BatchStopJobRunResponse;
    contentType: string;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
