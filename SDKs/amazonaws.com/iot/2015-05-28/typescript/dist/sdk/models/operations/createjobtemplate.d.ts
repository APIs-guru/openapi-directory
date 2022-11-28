import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateJobTemplatePathParams extends SpeakeasyBase {
    jobTemplateId: string;
}
export declare class CreateJobTemplateHeaders extends SpeakeasyBase {
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
export declare class CreateJobTemplateRequestBodyAbortConfig extends SpeakeasyBase {
    criteriaList?: shared.AbortCriteria[];
}
/**
 * Allows you to create a staged rollout of a job.
**/
export declare class CreateJobTemplateRequestBodyJobExecutionsRolloutConfig extends SpeakeasyBase {
    exponentialRate?: shared.ExponentialRolloutRate;
    maximumPerMinute?: number;
}
/**
 * Configuration for pre-signed S3 URLs.
**/
export declare class CreateJobTemplateRequestBodyPresignedUrlConfig extends SpeakeasyBase {
    expiresInSec?: number;
    roleArn?: string;
}
/**
 * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
**/
export declare class CreateJobTemplateRequestBodyTimeoutConfig extends SpeakeasyBase {
    inProgressTimeoutInMinutes?: number;
}
export declare class CreateJobTemplateRequestBody extends SpeakeasyBase {
    abortConfig?: CreateJobTemplateRequestBodyAbortConfig;
    description: string;
    document?: string;
    documentSource?: string;
    jobArn?: string;
    jobExecutionsRolloutConfig?: CreateJobTemplateRequestBodyJobExecutionsRolloutConfig;
    presignedUrlConfig?: CreateJobTemplateRequestBodyPresignedUrlConfig;
    tags?: shared.Tag[];
    timeoutConfig?: CreateJobTemplateRequestBodyTimeoutConfig;
}
export declare class CreateJobTemplateRequest extends SpeakeasyBase {
    pathParams: CreateJobTemplatePathParams;
    headers: CreateJobTemplateHeaders;
    request: CreateJobTemplateRequestBody;
}
export declare class CreateJobTemplateResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    createJobTemplateResponse?: shared.CreateJobTemplateResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
