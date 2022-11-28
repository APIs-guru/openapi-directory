import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateJobPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class UpdateJobQueryParams extends SpeakeasyBase {
    namespaceId?: string;
}
export declare class UpdateJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The criteria that determine when and how a job abort takes place.
**/
export declare class UpdateJobRequestBodyAbortConfig extends SpeakeasyBase {
    criteriaList?: shared.AbortCriteria[];
}
/**
 * Allows you to create a staged rollout of a job.
**/
export declare class UpdateJobRequestBodyJobExecutionsRolloutConfig extends SpeakeasyBase {
    exponentialRate?: shared.ExponentialRolloutRate;
    maximumPerMinute?: number;
}
/**
 * Configuration for pre-signed S3 URLs.
**/
export declare class UpdateJobRequestBodyPresignedUrlConfig extends SpeakeasyBase {
    expiresInSec?: number;
    roleArn?: string;
}
/**
 * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
**/
export declare class UpdateJobRequestBodyTimeoutConfig extends SpeakeasyBase {
    inProgressTimeoutInMinutes?: number;
}
export declare class UpdateJobRequestBody extends SpeakeasyBase {
    abortConfig?: UpdateJobRequestBodyAbortConfig;
    description?: string;
    jobExecutionsRolloutConfig?: UpdateJobRequestBodyJobExecutionsRolloutConfig;
    presignedUrlConfig?: UpdateJobRequestBodyPresignedUrlConfig;
    timeoutConfig?: UpdateJobRequestBodyTimeoutConfig;
}
export declare class UpdateJobRequest extends SpeakeasyBase {
    pathParams: UpdateJobPathParams;
    queryParams: UpdateJobQueryParams;
    headers: UpdateJobHeaders;
    request: UpdateJobRequestBody;
}
export declare class UpdateJobResponse extends SpeakeasyBase {
    contentType: string;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
