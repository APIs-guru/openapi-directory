import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateJobPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class CreateJobHeaders extends SpeakeasyBase {
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
export declare class CreateJobRequestBodyAbortConfig extends SpeakeasyBase {
    criteriaList?: shared.AbortCriteria[];
}
/**
 * Allows you to create a staged rollout of a job.
**/
export declare class CreateJobRequestBodyJobExecutionsRolloutConfig extends SpeakeasyBase {
    exponentialRate?: shared.ExponentialRolloutRate;
    maximumPerMinute?: number;
}
/**
 * Configuration for pre-signed S3 URLs.
**/
export declare class CreateJobRequestBodyPresignedUrlConfig extends SpeakeasyBase {
    expiresInSec?: number;
    roleArn?: string;
}
export declare enum CreateJobRequestBodyTargetSelectionEnum {
    Continuous = "CONTINUOUS",
    Snapshot = "SNAPSHOT"
}
/**
 * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
**/
export declare class CreateJobRequestBodyTimeoutConfig extends SpeakeasyBase {
    inProgressTimeoutInMinutes?: number;
}
export declare class CreateJobRequestBody extends SpeakeasyBase {
    abortConfig?: CreateJobRequestBodyAbortConfig;
    description?: string;
    document?: string;
    documentSource?: string;
    jobExecutionsRolloutConfig?: CreateJobRequestBodyJobExecutionsRolloutConfig;
    jobTemplateArn?: string;
    namespaceId?: string;
    presignedUrlConfig?: CreateJobRequestBodyPresignedUrlConfig;
    tags?: shared.Tag[];
    targetSelection?: CreateJobRequestBodyTargetSelectionEnum;
    targets: string[];
    timeoutConfig?: CreateJobRequestBodyTimeoutConfig;
}
export declare class CreateJobRequest extends SpeakeasyBase {
    pathParams: CreateJobPathParams;
    headers: CreateJobHeaders;
    request: CreateJobRequestBody;
}
export declare class CreateJobResponse extends SpeakeasyBase {
    contentType: string;
    createJobResponse?: shared.CreateJobResponse;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
}
