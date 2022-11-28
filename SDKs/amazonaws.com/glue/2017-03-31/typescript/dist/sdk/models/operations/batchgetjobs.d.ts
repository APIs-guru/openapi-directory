import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchGetJobsXAmzTargetEnum {
    AwsGlueBatchGetJobs = "AWSGlue.BatchGetJobs"
}
export declare class BatchGetJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetJobsXAmzTargetEnum;
}
export declare class BatchGetJobsRequest extends SpeakeasyBase {
    headers: BatchGetJobsHeaders;
    request: shared.BatchGetJobsRequest;
}
export declare class BatchGetJobsResponse extends SpeakeasyBase {
    batchGetJobsResponse?: shared.BatchGetJobsResponse;
    contentType: string;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
