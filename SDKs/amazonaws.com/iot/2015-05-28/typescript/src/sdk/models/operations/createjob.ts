import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateJobPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;
}


export class CreateJobHeaders extends SpeakeasyBase {
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


// CreateJobRequestBodyAbortConfig
/** 
 * The criteria that determine when and how a job abort takes place.
**/
export class CreateJobRequestBodyAbortConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=criteriaList", elemType: shared.AbortCriteria })
  criteriaList?: shared.AbortCriteria[];
}


// CreateJobRequestBodyJobExecutionsRolloutConfig
/** 
 * Allows you to create a staged rollout of a job.
**/
export class CreateJobRequestBodyJobExecutionsRolloutConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exponentialRate" })
  exponentialRate?: shared.ExponentialRolloutRate;

  @SpeakeasyMetadata({ data: "json, name=maximumPerMinute" })
  maximumPerMinute?: number;
}


// CreateJobRequestBodyPresignedUrlConfig
/** 
 * Configuration for pre-signed S3 URLs.
**/
export class CreateJobRequestBodyPresignedUrlConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiresInSec" })
  expiresInSec?: number;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn?: string;
}

export enum CreateJobRequestBodyTargetSelectionEnum {
    Continuous = "CONTINUOUS",
    Snapshot = "SNAPSHOT"
}


// CreateJobRequestBodyTimeoutConfig
/** 
 * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
**/
export class CreateJobRequestBodyTimeoutConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inProgressTimeoutInMinutes" })
  inProgressTimeoutInMinutes?: number;
}


export class CreateJobRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abortConfig" })
  abortConfig?: CreateJobRequestBodyAbortConfig;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=document" })
  document?: string;

  @SpeakeasyMetadata({ data: "json, name=documentSource" })
  documentSource?: string;

  @SpeakeasyMetadata({ data: "json, name=jobExecutionsRolloutConfig" })
  jobExecutionsRolloutConfig?: CreateJobRequestBodyJobExecutionsRolloutConfig;

  @SpeakeasyMetadata({ data: "json, name=jobTemplateArn" })
  jobTemplateArn?: string;

  @SpeakeasyMetadata({ data: "json, name=namespaceId" })
  namespaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=presignedUrlConfig" })
  presignedUrlConfig?: CreateJobRequestBodyPresignedUrlConfig;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];

  @SpeakeasyMetadata({ data: "json, name=targetSelection" })
  targetSelection?: CreateJobRequestBodyTargetSelectionEnum;

  @SpeakeasyMetadata({ data: "json, name=targets" })
  targets: string[];

  @SpeakeasyMetadata({ data: "json, name=timeoutConfig" })
  timeoutConfig?: CreateJobRequestBodyTimeoutConfig;
}


export class CreateJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateJobPathParams;

  @SpeakeasyMetadata()
  headers: CreateJobHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateJobRequestBody;
}


export class CreateJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createJobResponse?: shared.CreateJobResponse;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
