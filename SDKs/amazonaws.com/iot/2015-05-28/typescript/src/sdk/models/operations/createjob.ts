import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateJobPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;
}


export class CreateJobHeaders extends SpeakeasyBase {
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


// CreateJobRequestBodyAbortConfig
/** 
 * The criteria that determine when and how a job abort takes place.
**/
export class CreateJobRequestBodyAbortConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=criteriaList", elemType: shared.AbortCriteria })
  criteriaList?: shared.AbortCriteria[];
}


// CreateJobRequestBodyJobExecutionsRolloutConfig
/** 
 * Allows you to create a staged rollout of a job.
**/
export class CreateJobRequestBodyJobExecutionsRolloutConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=exponentialRate" })
  exponentialRate?: shared.ExponentialRolloutRate;

  @Metadata({ data: "json, name=maximumPerMinute" })
  maximumPerMinute?: number;
}


// CreateJobRequestBodyPresignedUrlConfig
/** 
 * Configuration for pre-signed S3 URLs.
**/
export class CreateJobRequestBodyPresignedUrlConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiresInSec" })
  expiresInSec?: number;

  @Metadata({ data: "json, name=roleArn" })
  roleArn?: string;
}

export enum CreateJobRequestBodyTargetSelectionEnum {
    Continuous = "CONTINUOUS"
,    Snapshot = "SNAPSHOT"
}


// CreateJobRequestBodyTimeoutConfig
/** 
 * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
**/
export class CreateJobRequestBodyTimeoutConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=inProgressTimeoutInMinutes" })
  inProgressTimeoutInMinutes?: number;
}


export class CreateJobRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=abortConfig" })
  abortConfig?: CreateJobRequestBodyAbortConfig;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=document" })
  document?: string;

  @Metadata({ data: "json, name=documentSource" })
  documentSource?: string;

  @Metadata({ data: "json, name=jobExecutionsRolloutConfig" })
  jobExecutionsRolloutConfig?: CreateJobRequestBodyJobExecutionsRolloutConfig;

  @Metadata({ data: "json, name=jobTemplateArn" })
  jobTemplateArn?: string;

  @Metadata({ data: "json, name=namespaceId" })
  namespaceId?: string;

  @Metadata({ data: "json, name=presignedUrlConfig" })
  presignedUrlConfig?: CreateJobRequestBodyPresignedUrlConfig;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];

  @Metadata({ data: "json, name=targetSelection" })
  targetSelection?: CreateJobRequestBodyTargetSelectionEnum;

  @Metadata({ data: "json, name=targets" })
  targets: string[];

  @Metadata({ data: "json, name=timeoutConfig" })
  timeoutConfig?: CreateJobRequestBodyTimeoutConfig;
}


export class CreateJobRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateJobPathParams;

  @Metadata()
  headers: CreateJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateJobRequestBody;
}


export class CreateJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createJobResponse?: shared.CreateJobResponse;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceAlreadyExistsException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
