import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateStagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=apiId" })
  apiId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=stageName" })
  stageName: string;
}


export class UpdateStageHeaders extends SpeakeasyBase {
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


// UpdateStageRequestBodyAccessLogSettings
/** 
 * Settings for logging access in a stage.
**/
export class UpdateStageRequestBodyAccessLogSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationArn" })
  destinationArn?: string;

  @Metadata({ data: "json, name=Format" })
  format?: string;
}


// UpdateStageRequestBodyDefaultRouteSettings
/** 
 * Represents a collection of route settings.
**/
export class UpdateStageRequestBodyDefaultRouteSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataTraceEnabled" })
  dataTraceEnabled?: boolean;

  @Metadata({ data: "json, name=DetailedMetricsEnabled" })
  detailedMetricsEnabled?: boolean;

  @Metadata({ data: "json, name=LoggingLevel" })
  loggingLevel?: shared.LoggingLevelEnum;

  @Metadata({ data: "json, name=ThrottlingBurstLimit" })
  throttlingBurstLimit?: number;

  @Metadata({ data: "json, name=ThrottlingRateLimit" })
  throttlingRateLimit?: number;
}


export class UpdateStageRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessLogSettings" })
  accessLogSettings?: UpdateStageRequestBodyAccessLogSettings;

  @Metadata({ data: "json, name=autoDeploy" })
  autoDeploy?: boolean;

  @Metadata({ data: "json, name=clientCertificateId" })
  clientCertificateId?: string;

  @Metadata({ data: "json, name=defaultRouteSettings" })
  defaultRouteSettings?: UpdateStageRequestBodyDefaultRouteSettings;

  @Metadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=routeSettings", elemType: shared.RouteSettings })
  routeSettings?: Map<string, shared.RouteSettings>;

  @Metadata({ data: "json, name=stageVariables" })
  stageVariables?: Map<string, string>;
}


export class UpdateStageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateStagePathParams;

  @Metadata()
  headers: UpdateStageHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateStageRequestBody;
}


export class UpdateStageResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  updateStageResponse?: shared.UpdateStageResponse;
}
