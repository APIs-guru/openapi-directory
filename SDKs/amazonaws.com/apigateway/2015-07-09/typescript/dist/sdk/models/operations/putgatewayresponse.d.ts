import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutGatewayResponseResponseTypeEnum {
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
export declare class PutGatewayResponsePathParams extends SpeakeasyBase {
    responseType: PutGatewayResponseResponseTypeEnum;
    restapiId: string;
}
export declare class PutGatewayResponseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutGatewayResponseRequestBody extends SpeakeasyBase {
    responseParameters?: Map<string, string>;
    responseTemplates?: Map<string, string>;
    statusCode?: string;
}
export declare class PutGatewayResponseRequest extends SpeakeasyBase {
    pathParams: PutGatewayResponsePathParams;
    headers: PutGatewayResponseHeaders;
    request: PutGatewayResponseRequestBody;
}
export declare class PutGatewayResponseResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    gatewayResponse?: shared.GatewayResponse;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
