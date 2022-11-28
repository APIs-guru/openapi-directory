import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateJobExecutionPathParams extends SpeakeasyBase {
    jobId: string;
    thingName: string;
}
export declare class UpdateJobExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateJobExecutionRequestBodyStatusEnum {
    Queued = "QUEUED",
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    TimedOut = "TIMED_OUT",
    Rejected = "REJECTED",
    Removed = "REMOVED",
    Canceled = "CANCELED"
}
export declare class UpdateJobExecutionRequestBody extends SpeakeasyBase {
    executionNumber?: number;
    expectedVersion?: number;
    includeJobDocument?: boolean;
    includeJobExecutionState?: boolean;
    status: UpdateJobExecutionRequestBodyStatusEnum;
    statusDetails?: Map<string, string>;
    stepTimeoutInMinutes?: number;
}
export declare class UpdateJobExecutionRequest extends SpeakeasyBase {
    pathParams: UpdateJobExecutionPathParams;
    headers: UpdateJobExecutionHeaders;
    request: UpdateJobExecutionRequestBody;
}
export declare class UpdateJobExecutionResponse extends SpeakeasyBase {
    certificateValidationException?: any;
    contentType: string;
    invalidRequestException?: any;
    invalidStateTransitionException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    updateJobExecutionResponse?: shared.UpdateJobExecutionResponse;
}
