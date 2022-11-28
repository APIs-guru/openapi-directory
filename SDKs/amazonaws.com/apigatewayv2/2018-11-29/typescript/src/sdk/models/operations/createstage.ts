import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateStagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;
}


export class CreateStageHeaders extends SpeakeasyBase {
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


// CreateStageRequestBodyAccessLogSettings
/** 
 * Settings for logging access in a stage.
**/
export class CreateStageRequestBodyAccessLogSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationArn" })
  destinationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Format" })
  format?: string;
}


// CreateStageRequestBodyDefaultRouteSettings
/** 
 * Represents a collection of route settings.
**/
export class CreateStageRequestBodyDefaultRouteSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataTraceEnabled" })
  dataTraceEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DetailedMetricsEnabled" })
  detailedMetricsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LoggingLevel" })
  loggingLevel?: shared.LoggingLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=ThrottlingBurstLimit" })
  throttlingBurstLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=ThrottlingRateLimit" })
  throttlingRateLimit?: number;
}


export class CreateStageRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessLogSettings" })
  accessLogSettings?: CreateStageRequestBodyAccessLogSettings;

  @SpeakeasyMetadata({ data: "json, name=autoDeploy" })
  autoDeploy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=clientCertificateId" })
  clientCertificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultRouteSettings" })
  defaultRouteSettings?: CreateStageRequestBodyDefaultRouteSettings;

  @SpeakeasyMetadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=routeSettings", elemType: shared.RouteSettings })
  routeSettings?: Map<string, shared.RouteSettings>;

  @SpeakeasyMetadata({ data: "json, name=stageName" })
  stageName: string;

  @SpeakeasyMetadata({ data: "json, name=stageVariables" })
  stageVariables?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateStageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateStagePathParams;

  @SpeakeasyMetadata()
  headers: CreateStageHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateStageRequestBody;
}


export class CreateStageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createStageResponse?: shared.CreateStageResponse;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
