import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchGetWorkflowsXAmzTargetEnum {
    AwsGlueBatchGetWorkflows = "AWSGlue.BatchGetWorkflows"
}
export declare class BatchGetWorkflowsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetWorkflowsXAmzTargetEnum;
}
export declare class BatchGetWorkflowsRequest extends SpeakeasyBase {
    headers: BatchGetWorkflowsHeaders;
    request: shared.BatchGetWorkflowsRequest;
}
export declare class BatchGetWorkflowsResponse extends SpeakeasyBase {
    batchGetWorkflowsResponse?: shared.BatchGetWorkflowsResponse;
    contentType: string;
    internalServiceException?: any;
    invalidInputException?: any;
    operationTimeoutException?: any;
    statusCode: number;
}
