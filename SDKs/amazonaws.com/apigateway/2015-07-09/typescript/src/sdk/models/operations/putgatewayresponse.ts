import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PutGatewayResponseResponseTypeEnum {
    Default4Xx = "DEFAULT_4XX",
    Default5Xx = "DEFAULT_5XX",
    ResourceNotFound = "RESOURCE_NOT_FOUND",
    Unauthorized = "UNAUTHORIZED",
    InvalidApiKey = "INVALID_API_KEY",
    AccessDenied = "ACCESS_DENIED",
    AuthorizerFailure = "AUTHORIZER_FAILURE",
    AuthorizerConfigurationError = "AUTHORIZER_CONFIGURATION_ERROR",
    InvalidSignature = "INVALID_SIGNATURE",
    ExpiredToken = "EXPIRED_TOKEN",
    MissingAuthenticationToken = "MISSING_AUTHENTICATION_TOKEN",
    IntegrationFailure = "INTEGRATION_FAILURE",
    IntegrationTimeout = "INTEGRATION_TIMEOUT",
    ApiConfigurationError = "API_CONFIGURATION_ERROR",
    UnsupportedMediaType = "UNSUPPORTED_MEDIA_TYPE",
    BadRequestParameters = "BAD_REQUEST_PARAMETERS",
    BadRequestBody = "BAD_REQUEST_BODY",
    RequestTooLarge = "REQUEST_TOO_LARGE",
    Throttled = "THROTTLED",
    QuotaExceeded = "QUOTA_EXCEEDED",
    WafFiltered = "WAF_FILTERED"
}


export class PutGatewayResponsePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=response_type" })
  responseType: PutGatewayResponseResponseTypeEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" })
  restapiId: string;
}


export class PutGatewayResponseHeaders extends SpeakeasyBase {
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


export class PutGatewayResponseRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=responseParameters" })
  responseParameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=responseTemplates" })
  responseTemplates?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: string;
}


export class PutGatewayResponseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutGatewayResponsePathParams;

  @SpeakeasyMetadata()
  headers: PutGatewayResponseHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutGatewayResponseRequestBody;
}


export class PutGatewayResponseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  gatewayResponse?: shared.GatewayResponse;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
