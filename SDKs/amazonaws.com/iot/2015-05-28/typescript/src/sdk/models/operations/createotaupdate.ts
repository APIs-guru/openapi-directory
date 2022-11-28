import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateOtaUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=otaUpdateId" })
  otaUpdateId: string;
}


export class CreateOtaUpdateHeaders extends SpeakeasyBase {
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


// CreateOtaUpdateRequestBodyAwsJobAbortConfig
/** 
 * The criteria that determine when and how a job abort takes place.
**/
export class CreateOtaUpdateRequestBodyAwsJobAbortConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abortCriteriaList", elemType: shared.AwsJobAbortCriteria })
  abortCriteriaList?: shared.AwsJobAbortCriteria[];
}


// CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig
/** 
 * Configuration for the rollout of OTA updates.
**/
export class CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exponentialRate" })
  exponentialRate?: shared.AwsJobExponentialRolloutRate;

  @SpeakeasyMetadata({ data: "json, name=maximumPerMinute" })
  maximumPerMinute?: number;
}


// CreateOtaUpdateRequestBodyAwsJobPresignedUrlConfig
/** 
 * Configuration information for pre-signed URLs. Valid when <code>protocols</code> contains HTTP.
**/
export class CreateOtaUpdateRequestBodyAwsJobPresignedUrlConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiresInSec" })
  expiresInSec?: number;
}


// CreateOtaUpdateRequestBodyAwsJobTimeoutConfig
/** 
 * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
**/
export class CreateOtaUpdateRequestBodyAwsJobTimeoutConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inProgressTimeoutInMinutes" })
  inProgressTimeoutInMinutes?: number;
}

export enum CreateOtaUpdateRequestBodyTargetSelectionEnum {
    Continuous = "CONTINUOUS",
    Snapshot = "SNAPSHOT"
}


export class CreateOtaUpdateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalParameters" })
  additionalParameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=awsJobAbortConfig" })
  awsJobAbortConfig?: CreateOtaUpdateRequestBodyAwsJobAbortConfig;

  @SpeakeasyMetadata({ data: "json, name=awsJobExecutionsRolloutConfig" })
  awsJobExecutionsRolloutConfig?: CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig;

  @SpeakeasyMetadata({ data: "json, name=awsJobPresignedUrlConfig" })
  awsJobPresignedUrlConfig?: CreateOtaUpdateRequestBodyAwsJobPresignedUrlConfig;

  @SpeakeasyMetadata({ data: "json, name=awsJobTimeoutConfig" })
  awsJobTimeoutConfig?: CreateOtaUpdateRequestBodyAwsJobTimeoutConfig;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=files", elemType: shared.OtaUpdateFile })
  files: shared.OtaUpdateFile[];

  @SpeakeasyMetadata({ data: "json, name=protocols" })
  protocols?: shared.ProtocolEnum[];

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];

  @SpeakeasyMetadata({ data: "json, name=targetSelection" })
  targetSelection?: CreateOtaUpdateRequestBodyTargetSelectionEnum;

  @SpeakeasyMetadata({ data: "json, name=targets" })
  targets: string[];
}


export class CreateOtaUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateOtaUpdatePathParams;

  @SpeakeasyMetadata()
  headers: CreateOtaUpdateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateOtaUpdateRequestBody;
}


export class CreateOtaUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createOtaUpdateResponse?: shared.CreateOtaUpdateResponse;

  @SpeakeasyMetadata()
  internalFailureException?: any;

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

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
