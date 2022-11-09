import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetGatewayResponseResponseTypeEnum {
    Default4Xx = "DEFAULT_4XX"
,    Default5Xx = "DEFAULT_5XX"
,    ResourceNotFound = "RESOURCE_NOT_FOUND"
,    Unauthorized = "UNAUTHORIZED"
,    InvalidApiKey = "INVALID_API_KEY"
,    AccessDenied = "ACCESS_DENIED"
,    AuthorizerFailure = "AUTHORIZER_FAILURE"
,    AuthorizerConfigurationError = "AUTHORIZER_CONFIGURATION_ERROR"
,    InvalidSignature = "INVALID_SIGNATURE"
,    ExpiredToken = "EXPIRED_TOKEN"
,    MissingAuthenticationToken = "MISSING_AUTHENTICATION_TOKEN"
,    IntegrationFailure = "INTEGRATION_FAILURE"
,    IntegrationTimeout = "INTEGRATION_TIMEOUT"
,    ApiConfigurationError = "API_CONFIGURATION_ERROR"
,    UnsupportedMediaType = "UNSUPPORTED_MEDIA_TYPE"
,    BadRequestParameters = "BAD_REQUEST_PARAMETERS"
,    BadRequestBody = "BAD_REQUEST_BODY"
,    RequestTooLarge = "REQUEST_TOO_LARGE"
,    Throttled = "THROTTLED"
,    QuotaExceeded = "QUOTA_EXCEEDED"
,    WafFiltered = "WAF_FILTERED"
}


export class GetGatewayResponsePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=response_type" })
  responseType: GetGatewayResponseResponseTypeEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=restapi_id" })
  restapiId: string;
}


export class GetGatewayResponseHeaders extends SpeakeasyBase {
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


export class GetGatewayResponseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGatewayResponsePathParams;

  @Metadata()
  headers: GetGatewayResponseHeaders;
}


export class GetGatewayResponseResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  gatewayResponse?: shared.GatewayResponse;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unauthorizedException?: any;
}
