import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateJobTemplatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobTemplateId" })
  jobTemplateId: string;
}


export class CreateJobTemplateHeaders extends SpeakeasyBase {
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


// CreateJobTemplateRequestBodyAbortConfig
/** 
 * The criteria that determine when and how a job abort takes place.
**/
export class CreateJobTemplateRequestBodyAbortConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=criteriaList", elemType: shared.AbortCriteria })
  criteriaList?: shared.AbortCriteria[];
}


// CreateJobTemplateRequestBodyJobExecutionsRolloutConfig
/** 
 * Allows you to create a staged rollout of a job.
**/
export class CreateJobTemplateRequestBodyJobExecutionsRolloutConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=exponentialRate" })
  exponentialRate?: shared.ExponentialRolloutRate;

  @Metadata({ data: "json, name=maximumPerMinute" })
  maximumPerMinute?: number;
}


// CreateJobTemplateRequestBodyPresignedUrlConfig
/** 
 * Configuration for pre-signed S3 URLs.
**/
export class CreateJobTemplateRequestBodyPresignedUrlConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiresInSec" })
  expiresInSec?: number;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;
}


// CreateJobTemplateRequestBodyTimeoutConfig
/** 
 * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
**/
export class CreateJobTemplateRequestBodyTimeoutConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=inProgressTimeoutInMinutes" })
  inProgressTimeoutInMinutes?: number;
}


export class CreateJobTemplateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=abortConfig" })
  abortConfig?: CreateJobTemplateRequestBodyAbortConfig;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=document" })
  document?: string;

  @Metadata({ data: "json, name=documentSource" })
  documentSource?: string;

  @Metadata({ data: "json, name=jobArn" })
  jobArn?: string;

  @Metadata({ data: "json, name=jobExecutionsRolloutConfig" })
  jobExecutionsRolloutConfig?: CreateJobTemplateRequestBodyJobExecutionsRolloutConfig;

  @Metadata({ data: "json, name=presignedUrlConfig" })
  presignedUrlConfig?: CreateJobTemplateRequestBodyPresignedUrlConfig;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];

  @Metadata({ data: "json, name=timeoutConfig" })
  timeoutConfig?: CreateJobTemplateRequestBodyTimeoutConfig;
}


export class CreateJobTemplateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateJobTemplatePathParams;

  @Metadata()
  headers: CreateJobTemplateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateJobTemplateRequestBody;
}


export class CreateJobTemplateResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createJobTemplateResponse?: shared.CreateJobTemplateResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
