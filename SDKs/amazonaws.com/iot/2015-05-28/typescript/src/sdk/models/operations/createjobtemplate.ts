import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateJobTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobTemplateId" })
  jobTemplateId: string;
}


export class CreateJobTemplateHeaders extends SpeakeasyBase {
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


// CreateJobTemplateRequestBodyAbortConfig
/** 
 * The criteria that determine when and how a job abort takes place.
**/
export class CreateJobTemplateRequestBodyAbortConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=criteriaList", elemType: shared.AbortCriteria })
  criteriaList?: shared.AbortCriteria[];
}


// CreateJobTemplateRequestBodyJobExecutionsRolloutConfig
/** 
 * Allows you to create a staged rollout of a job.
**/
export class CreateJobTemplateRequestBodyJobExecutionsRolloutConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exponentialRate" })
  exponentialRate?: shared.ExponentialRolloutRate;

  @SpeakeasyMetadata({ data: "json, name=maximumPerMinute" })
  maximumPerMinute?: number;
}


// CreateJobTemplateRequestBodyPresignedUrlConfig
/** 
 * Configuration for pre-signed S3 URLs.
**/
export class CreateJobTemplateRequestBodyPresignedUrlConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiresInSec" })
  expiresInSec?: number;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;
}


// CreateJobTemplateRequestBodyTimeoutConfig
/** 
 * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
**/
export class CreateJobTemplateRequestBodyTimeoutConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inProgressTimeoutInMinutes" })
  inProgressTimeoutInMinutes?: number;
}


export class CreateJobTemplateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abortConfig" })
  abortConfig?: CreateJobTemplateRequestBodyAbortConfig;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=document" })
  document?: string;

  @SpeakeasyMetadata({ data: "json, name=documentSource" })
  documentSource?: string;

  @SpeakeasyMetadata({ data: "json, name=jobArn" })
  jobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=jobExecutionsRolloutConfig" })
  jobExecutionsRolloutConfig?: CreateJobTemplateRequestBodyJobExecutionsRolloutConfig;

  @SpeakeasyMetadata({ data: "json, name=presignedUrlConfig" })
  presignedUrlConfig?: CreateJobTemplateRequestBodyPresignedUrlConfig;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];

  @SpeakeasyMetadata({ data: "json, name=timeoutConfig" })
  timeoutConfig?: CreateJobTemplateRequestBodyTimeoutConfig;
}


export class CreateJobTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateJobTemplatePathParams;

  @SpeakeasyMetadata()
  headers: CreateJobTemplateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateJobTemplateRequestBody;
}


export class CreateJobTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createJobTemplateResponse?: shared.CreateJobTemplateResponse;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
