package operations

import (
	"openapi/pkg/models/shared"
)

type GetGatewayResponseResponseTypeEnum string

const (
	GetGatewayResponseResponseTypeEnumDefault4Xx                   GetGatewayResponseResponseTypeEnum = "DEFAULT_4XX"
	GetGatewayResponseResponseTypeEnumDefault5Xx                   GetGatewayResponseResponseTypeEnum = "DEFAULT_5XX"
	GetGatewayResponseResponseTypeEnumResourceNotFound             GetGatewayResponseResponseTypeEnum = "RESOURCE_NOT_FOUND"
	GetGatewayResponseResponseTypeEnumUnauthorized                 GetGatewayResponseResponseTypeEnum = "UNAUTHORIZED"
	GetGatewayResponseResponseTypeEnumInvalidAPIKey                GetGatewayResponseResponseTypeEnum = "INVALID_API_KEY"
	GetGatewayResponseResponseTypeEnumAccessDenied                 GetGatewayResponseResponseTypeEnum = "ACCESS_DENIED"
	GetGatewayResponseResponseTypeEnumAuthorizerFailure            GetGatewayResponseResponseTypeEnum = "AUTHORIZER_FAILURE"
	GetGatewayResponseResponseTypeEnumAuthorizerConfigurationError GetGatewayResponseResponseTypeEnum = "AUTHORIZER_CONFIGURATION_ERROR"
	GetGatewayResponseResponseTypeEnumInvalidSignature             GetGatewayResponseResponseTypeEnum = "INVALID_SIGNATURE"
	GetGatewayResponseResponseTypeEnumExpiredToken                 GetGatewayResponseResponseTypeEnum = "EXPIRED_TOKEN"
	GetGatewayResponseResponseTypeEnumMissingAuthenticationToken   GetGatewayResponseResponseTypeEnum = "MISSING_AUTHENTICATION_TOKEN"
	GetGatewayResponseResponseTypeEnumIntegrationFailure           GetGatewayResponseResponseTypeEnum = "INTEGRATION_FAILURE"
	GetGatewayResponseResponseTypeEnumIntegrationTimeout           GetGatewayResponseResponseTypeEnum = "INTEGRATION_TIMEOUT"
	GetGatewayResponseResponseTypeEnumAPIConfigurationError        GetGatewayResponseResponseTypeEnum = "API_CONFIGURATION_ERROR"
	GetGatewayResponseResponseTypeEnumUnsupportedMediaType         GetGatewayResponseResponseTypeEnum = "UNSUPPORTED_MEDIA_TYPE"
	GetGatewayResponseResponseTypeEnumBadRequestParameters         GetGatewayResponseResponseTypeEnum = "BAD_REQUEST_PARAMETERS"
	GetGatewayResponseResponseTypeEnumBadRequestBody               GetGatewayResponseResponseTypeEnum = "BAD_REQUEST_BODY"
	GetGatewayResponseResponseTypeEnumRequestTooLarge              GetGatewayResponseResponseTypeEnum = "REQUEST_TOO_LARGE"
	GetGatewayResponseResponseTypeEnumThrottled                    GetGatewayResponseResponseTypeEnum = "THROTTLED"
	GetGatewayResponseResponseTypeEnumQuotaExceeded                GetGatewayResponseResponseTypeEnum = "QUOTA_EXCEEDED"
	GetGatewayResponseResponseTypeEnumWafFiltered                  GetGatewayResponseResponseTypeEnum = "WAF_FILTERED"
)

type GetGatewayResponsePathParams struct {
	ResponseType GetGatewayResponseResponseTypeEnum `pathParam:"style=simple,explode=false,name=response_type"`
	RestapiID    string                             `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type GetGatewayResponseHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGatewayResponseRequest struct {
	PathParams GetGatewayResponsePathParams
	Headers    GetGatewayResponseHeaders
}

type GetGatewayResponseResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GatewayResponse          *shared.GatewayResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
