import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateJobPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;
}


export class UpdateJobQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=namespaceId" })
  namespaceId?: string;
}


export class UpdateJobHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// UpdateJobRequestBodyAbortConfig
/** 
 * The criteria that determine when and how a job abort takes place.
**/
export class UpdateJobRequestBodyAbortConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=criteriaList", elemType: shared.AbortCriteria })
  criteriaList?: shared.AbortCriteria[];
}


// UpdateJobRequestBodyJobExecutionsRolloutConfig
/** 
 * Allows you to create a staged rollout of a job.
**/
export class UpdateJobRequestBodyJobExecutionsRolloutConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exponentialRate" })
  exponentialRate?: shared.ExponentialRolloutRate;

  @SpeakeasyMetadata({ data: "json, name=maximumPerMinute" })
  maximumPerMinute?: number;
}


// UpdateJobRequestBodyPresignedUrlConfig
/** 
 * Configuration for pre-signed S3 URLs.
**/
export class UpdateJobRequestBodyPresignedUrlConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiresInSec" })
  expiresInSec?: number;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;
}


// UpdateJobRequestBodyTimeoutConfig
/** 
 * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
**/
export class UpdateJobRequestBodyTimeoutConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inProgressTimeoutInMinutes" })
  inProgressTimeoutInMinutes?: number;
}


export class UpdateJobRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abortConfig" })
  abortConfig?: UpdateJobRequestBodyAbortConfig;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=jobExecutionsRolloutConfig" })
  jobExecutionsRolloutConfig?: UpdateJobRequestBodyJobExecutionsRolloutConfig;

  @SpeakeasyMetadata({ data: "json, name=presignedUrlConfig" })
  presignedUrlConfig?: UpdateJobRequestBodyPresignedUrlConfig;

  @SpeakeasyMetadata({ data: "json, name=timeoutConfig" })
  timeoutConfig?: UpdateJobRequestBodyTimeoutConfig;
}


export class UpdateJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateJobPathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateJobQueryParams;

  @SpeakeasyMetadata()
  headers: UpdateJobHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateJobRequestBody;
}


export class UpdateJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
