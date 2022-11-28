import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateOtaUpdatePathParams extends SpeakeasyBase {
    otaUpdateId: string;
}
export declare class CreateOtaUpdateHeaders extends SpeakeasyBase {
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
export declare class CreateOtaUpdateRequestBodyAwsJobAbortConfig extends SpeakeasyBase {
    abortCriteriaList?: shared.AwsJobAbortCriteria[];
}
/**
 * Configuration for the rollout of OTA updates.
**/
export declare class CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig extends SpeakeasyBase {
    exponentialRate?: shared.AwsJobExponentialRolloutRate;
    maximumPerMinute?: number;
}
/**
 * Configuration information for pre-signed URLs. Valid when <code>protocols</code> contains HTTP.
**/
export declare class CreateOtaUpdateRequestBodyAwsJobPresignedUrlConfig extends SpeakeasyBase {
    expiresInSec?: number;
}
/**
 * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
**/
export declare class CreateOtaUpdateRequestBodyAwsJobTimeoutConfig extends SpeakeasyBase {
    inProgressTimeoutInMinutes?: number;
}
export declare enum CreateOtaUpdateRequestBodyTargetSelectionEnum {
    Continuous = "CONTINUOUS",
    Snapshot = "SNAPSHOT"
}
export declare class CreateOtaUpdateRequestBody extends SpeakeasyBase {
    additionalParameters?: Map<string, string>;
    awsJobAbortConfig?: CreateOtaUpdateRequestBodyAwsJobAbortConfig;
    awsJobExecutionsRolloutConfig?: CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig;
    awsJobPresignedUrlConfig?: CreateOtaUpdateRequestBodyAwsJobPresignedUrlConfig;
    awsJobTimeoutConfig?: CreateOtaUpdateRequestBodyAwsJobTimeoutConfig;
    description?: string;
    files: shared.OtaUpdateFile[];
    protocols?: shared.ProtocolEnum[];
    roleArn: string;
    tags?: shared.Tag[];
    targetSelection?: CreateOtaUpdateRequestBodyTargetSelectionEnum;
    targets: string[];
}
export declare class CreateOtaUpdateRequest extends SpeakeasyBase {
    pathParams: CreateOtaUpdatePathParams;
    headers: CreateOtaUpdateHeaders;
    request: CreateOtaUpdateRequestBody;
}
export declare class CreateOtaUpdateResponse extends SpeakeasyBase {
    contentType: string;
    createOtaUpdateResponse?: shared.CreateOtaUpdateResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
