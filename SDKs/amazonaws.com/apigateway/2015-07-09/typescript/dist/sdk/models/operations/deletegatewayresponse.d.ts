import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DeleteGatewayResponseResponseTypeEnum {
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
export declare class DeleteGatewayResponsePathParams extends SpeakeasyBase {
    responseType: DeleteGatewayResponseResponseTypeEnum;
    restapiId: string;
}
export declare class DeleteGatewayResponseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteGatewayResponseRequest extends SpeakeasyBase {
    pathParams: DeleteGatewayResponsePathParams;
    headers: DeleteGatewayResponseHeaders;
}
export declare class DeleteGatewayResponseResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
