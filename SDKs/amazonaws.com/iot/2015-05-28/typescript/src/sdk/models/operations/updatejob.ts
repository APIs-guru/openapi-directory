import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateJobPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;
}


export class UpdateJobQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=namespaceId" })
  namespaceId?: string;
}


export class UpdateJobHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// UpdateJobRequestBodyAbortConfig
/** 
 * The criteria that determine when and how a job abort takes place.
**/
export class UpdateJobRequestBodyAbortConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=criteriaList", elemType: shared.AbortCriteria })
  criteriaList?: shared.AbortCriteria[];
}


// UpdateJobRequestBodyJobExecutionsRolloutConfig
/** 
 * Allows you to create a staged rollout of a job.
**/
export class UpdateJobRequestBodyJobExecutionsRolloutConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=exponentialRate" })
  exponentialRate?: shared.ExponentialRolloutRate;

  @Metadata({ data: "json, name=maximumPerMinute" })
  maximumPerMinute?: number;
}


// UpdateJobRequestBodyPresignedUrlConfig
/** 
 * Configuration for pre-signed S3 URLs.
**/
export class UpdateJobRequestBodyPresignedUrlConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiresInSec" })
  expiresInSec?: number;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;
}


// UpdateJobRequestBodyTimeoutConfig
/** 
 * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
**/
export class UpdateJobRequestBodyTimeoutConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=inProgressTimeoutInMinutes" })
  inProgressTimeoutInMinutes?: number;
}


export class UpdateJobRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=abortConfig" })
  abortConfig?: UpdateJobRequestBodyAbortConfig;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=jobExecutionsRolloutConfig" })
  jobExecutionsRolloutConfig?: UpdateJobRequestBodyJobExecutionsRolloutConfig;

  @Metadata({ data: "json, name=presignedUrlConfig" })
  presignedUrlConfig?: UpdateJobRequestBodyPresignedUrlConfig;

  @Metadata({ data: "json, name=timeoutConfig" })
  timeoutConfig?: UpdateJobRequestBodyTimeoutConfig;
}


export class UpdateJobRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateJobPathParams;

  @Metadata()
  queryParams: UpdateJobQueryParams;

  @Metadata()
  headers: UpdateJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateJobRequestBody;
}


export class UpdateJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
