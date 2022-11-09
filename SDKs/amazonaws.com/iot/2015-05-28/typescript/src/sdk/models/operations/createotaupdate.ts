import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateOtaUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=otaUpdateId" })
  otaUpdateId: string;
}


export class CreateOtaUpdateHeaders extends SpeakeasyBase {
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


// CreateOtaUpdateRequestBodyAwsJobAbortConfig
/** 
 * The criteria that determine when and how a job abort takes place.
**/
export class CreateOtaUpdateRequestBodyAwsJobAbortConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=abortCriteriaList", elemType: shared.AwsJobAbortCriteria })
  abortCriteriaList?: shared.AwsJobAbortCriteria[];
}


// CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig
/** 
 * Configuration for the rollout of OTA updates.
**/
export class CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=exponentialRate" })
  exponentialRate?: shared.AwsJobExponentialRolloutRate;

  @Metadata({ data: "json, name=maximumPerMinute" })
  maximumPerMinute?: number;
}


// CreateOtaUpdateRequestBodyAwsJobPresignedUrlConfig
/** 
 * Configuration information for pre-signed URLs. Valid when <code>protocols</code> contains HTTP.
**/
export class CreateOtaUpdateRequestBodyAwsJobPresignedUrlConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiresInSec" })
  expiresInSec?: number;
}


// CreateOtaUpdateRequestBodyAwsJobTimeoutConfig
/** 
 * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
**/
export class CreateOtaUpdateRequestBodyAwsJobTimeoutConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=inProgressTimeoutInMinutes" })
  inProgressTimeoutInMinutes?: number;
}

export enum CreateOtaUpdateRequestBodyTargetSelectionEnum {
    Continuous = "CONTINUOUS"
,    Snapshot = "SNAPSHOT"
}


export class CreateOtaUpdateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalParameters" })
  additionalParameters?: Map<string, string>;

  @Metadata({ data: "json, name=awsJobAbortConfig" })
  awsJobAbortConfig?: CreateOtaUpdateRequestBodyAwsJobAbortConfig;

  @Metadata({ data: "json, name=awsJobExecutionsRolloutConfig" })
  awsJobExecutionsRolloutConfig?: CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig;

  @Metadata({ data: "json, name=awsJobPresignedUrlConfig" })
  awsJobPresignedUrlConfig?: CreateOtaUpdateRequestBodyAwsJobPresignedUrlConfig;

  @Metadata({ data: "json, name=awsJobTimeoutConfig" })
  awsJobTimeoutConfig?: CreateOtaUpdateRequestBodyAwsJobTimeoutConfig;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=files", elemType: shared.OtaUpdateFile })
  files: shared.OtaUpdateFile[];

  @Metadata({ data: "json, name=protocols" })
  protocols?: shared.ProtocolEnum[];

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];

  @Metadata({ data: "json, name=targetSelection" })
  targetSelection?: CreateOtaUpdateRequestBodyTargetSelectionEnum;

  @Metadata({ data: "json, name=targets" })
  targets: string[];
}


export class CreateOtaUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateOtaUpdatePathParams;

  @Metadata()
  headers: CreateOtaUpdateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateOtaUpdateRequestBody;
}


export class CreateOtaUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createOtaUpdateResponse?: shared.CreateOtaUpdateResponse;

  @Metadata()
  internalFailureException?: any;

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

  @Metadata()
  unauthorizedException?: any;
}
