import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetGatewayResponseResponseTypeEnum {
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
export declare class GetGatewayResponsePathParams extends SpeakeasyBase {
    responseType: GetGatewayResponseResponseTypeEnum;
    restapiId: string;
}
export declare class GetGatewayResponseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGatewayResponseRequest extends SpeakeasyBase {
    pathParams: GetGatewayResponsePathParams;
    headers: GetGatewayResponseHeaders;
}
export declare class GetGatewayResponseResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    gatewayResponse?: shared.GatewayResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
