import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateStagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stageName" })
  stageName: string;
}


export class UpdateStageHeaders extends SpeakeasyBase {
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


// UpdateStageRequestBodyAccessLogSettings
/** 
 * Settings for logging access in a stage.
**/
export class UpdateStageRequestBodyAccessLogSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationArn" })
  destinationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Format" })
  format?: string;
}


// UpdateStageRequestBodyDefaultRouteSettings
/** 
 * Represents a collection of route settings.
**/
export class UpdateStageRequestBodyDefaultRouteSettings extends SpeakeasyBase {
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


export class UpdateStageRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessLogSettings" })
  accessLogSettings?: UpdateStageRequestBodyAccessLogSettings;

  @SpeakeasyMetadata({ data: "json, name=autoDeploy" })
  autoDeploy?: boolean;

  @SpeakeasyMetadata({ data: "json, name=clientCertificateId" })
  clientCertificateId?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultRouteSettings" })
  defaultRouteSettings?: UpdateStageRequestBodyDefaultRouteSettings;

  @SpeakeasyMetadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=routeSettings", elemType: shared.RouteSettings })
  routeSettings?: Map<string, shared.RouteSettings>;

  @SpeakeasyMetadata({ data: "json, name=stageVariables" })
  stageVariables?: Map<string, string>;
}


export class UpdateStageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateStagePathParams;

  @SpeakeasyMetadata()
  headers: UpdateStageHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateStageRequestBody;
}


export class UpdateStageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  updateStageResponse?: shared.UpdateStageResponse;
}
