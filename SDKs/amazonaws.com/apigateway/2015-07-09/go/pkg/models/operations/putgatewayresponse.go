package operations

import (
	"openapi/pkg/models/shared"
)

type PutGatewayResponseResponseTypeEnum string

const (
	PutGatewayResponseResponseTypeEnumDefault4Xx                   PutGatewayResponseResponseTypeEnum = "DEFAULT_4XX"
	PutGatewayResponseResponseTypeEnumDefault5Xx                   PutGatewayResponseResponseTypeEnum = "DEFAULT_5XX"
	PutGatewayResponseResponseTypeEnumResourceNotFound             PutGatewayResponseResponseTypeEnum = "RESOURCE_NOT_FOUND"
	PutGatewayResponseResponseTypeEnumUnauthorized                 PutGatewayResponseResponseTypeEnum = "UNAUTHORIZED"
	PutGatewayResponseResponseTypeEnumInvalidAPIKey                PutGatewayResponseResponseTypeEnum = "INVALID_API_KEY"
	PutGatewayResponseResponseTypeEnumAccessDenied                 PutGatewayResponseResponseTypeEnum = "ACCESS_DENIED"
	PutGatewayResponseResponseTypeEnumAuthorizerFailure            PutGatewayResponseResponseTypeEnum = "AUTHORIZER_FAILURE"
	PutGatewayResponseResponseTypeEnumAuthorizerConfigurationError PutGatewayResponseResponseTypeEnum = "AUTHORIZER_CONFIGURATION_ERROR"
	PutGatewayResponseResponseTypeEnumInvalidSignature             PutGatewayResponseResponseTypeEnum = "INVALID_SIGNATURE"
	PutGatewayResponseResponseTypeEnumExpiredToken                 PutGatewayResponseResponseTypeEnum = "EXPIRED_TOKEN"
	PutGatewayResponseResponseTypeEnumMissingAuthenticationToken   PutGatewayResponseResponseTypeEnum = "MISSING_AUTHENTICATION_TOKEN"
	PutGatewayResponseResponseTypeEnumIntegrationFailure           PutGatewayResponseResponseTypeEnum = "INTEGRATION_FAILURE"
	PutGatewayResponseResponseTypeEnumIntegrationTimeout           PutGatewayResponseResponseTypeEnum = "INTEGRATION_TIMEOUT"
	PutGatewayResponseResponseTypeEnumAPIConfigurationError        PutGatewayResponseResponseTypeEnum = "API_CONFIGURATION_ERROR"
	PutGatewayResponseResponseTypeEnumUnsupportedMediaType         PutGatewayResponseResponseTypeEnum = "UNSUPPORTED_MEDIA_TYPE"
	PutGatewayResponseResponseTypeEnumBadRequestParameters         PutGatewayResponseResponseTypeEnum = "BAD_REQUEST_PARAMETERS"
	PutGatewayResponseResponseTypeEnumBadRequestBody               PutGatewayResponseResponseTypeEnum = "BAD_REQUEST_BODY"
	PutGatewayResponseResponseTypeEnumRequestTooLarge              PutGatewayResponseResponseTypeEnum = "REQUEST_TOO_LARGE"
	PutGatewayResponseResponseTypeEnumThrottled                    PutGatewayResponseResponseTypeEnum = "THROTTLED"
	PutGatewayResponseResponseTypeEnumQuotaExceeded                PutGatewayResponseResponseTypeEnum = "QUOTA_EXCEEDED"
	PutGatewayResponseResponseTypeEnumWafFiltered                  PutGatewayResponseResponseTypeEnum = "WAF_FILTERED"
)

type PutGatewayResponsePathParams struct {
	ResponseType PutGatewayResponseResponseTypeEnum `pathParam:"style=simple,explode=false,name=response_type"`
	RestapiID    string                             `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type PutGatewayResponseHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PutGatewayResponseRequestBody struct {
	ResponseParameters map[string]string `json:"responseParameters,omitempty"`
	ResponseTemplates  map[string]string `json:"responseTemplates,omitempty"`
	StatusCode         *string           `json:"statusCode,omitempty"`
}

type PutGatewayResponseRequest struct {
	PathParams PutGatewayResponsePathParams
	Headers    PutGatewayResponseHeaders
	Request    PutGatewayResponseRequestBody `request:"mediaType=application/json"`
}

type PutGatewayResponseResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	GatewayResponse          *shared.GatewayResponse
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
