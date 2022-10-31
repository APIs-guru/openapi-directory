package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGatewayResponseResponseTypeEnum string

const (
	UpdateGatewayResponseResponseTypeEnumDefault4Xx                   UpdateGatewayResponseResponseTypeEnum = "DEFAULT_4XX"
	UpdateGatewayResponseResponseTypeEnumDefault5Xx                   UpdateGatewayResponseResponseTypeEnum = "DEFAULT_5XX"
	UpdateGatewayResponseResponseTypeEnumResourceNotFound             UpdateGatewayResponseResponseTypeEnum = "RESOURCE_NOT_FOUND"
	UpdateGatewayResponseResponseTypeEnumUnauthorized                 UpdateGatewayResponseResponseTypeEnum = "UNAUTHORIZED"
	UpdateGatewayResponseResponseTypeEnumInvalidAPIKey                UpdateGatewayResponseResponseTypeEnum = "INVALID_API_KEY"
	UpdateGatewayResponseResponseTypeEnumAccessDenied                 UpdateGatewayResponseResponseTypeEnum = "ACCESS_DENIED"
	UpdateGatewayResponseResponseTypeEnumAuthorizerFailure            UpdateGatewayResponseResponseTypeEnum = "AUTHORIZER_FAILURE"
	UpdateGatewayResponseResponseTypeEnumAuthorizerConfigurationError UpdateGatewayResponseResponseTypeEnum = "AUTHORIZER_CONFIGURATION_ERROR"
	UpdateGatewayResponseResponseTypeEnumInvalidSignature             UpdateGatewayResponseResponseTypeEnum = "INVALID_SIGNATURE"
	UpdateGatewayResponseResponseTypeEnumExpiredToken                 UpdateGatewayResponseResponseTypeEnum = "EXPIRED_TOKEN"
	UpdateGatewayResponseResponseTypeEnumMissingAuthenticationToken   UpdateGatewayResponseResponseTypeEnum = "MISSING_AUTHENTICATION_TOKEN"
	UpdateGatewayResponseResponseTypeEnumIntegrationFailure           UpdateGatewayResponseResponseTypeEnum = "INTEGRATION_FAILURE"
	UpdateGatewayResponseResponseTypeEnumIntegrationTimeout           UpdateGatewayResponseResponseTypeEnum = "INTEGRATION_TIMEOUT"
	UpdateGatewayResponseResponseTypeEnumAPIConfigurationError        UpdateGatewayResponseResponseTypeEnum = "API_CONFIGURATION_ERROR"
	UpdateGatewayResponseResponseTypeEnumUnsupportedMediaType         UpdateGatewayResponseResponseTypeEnum = "UNSUPPORTED_MEDIA_TYPE"
	UpdateGatewayResponseResponseTypeEnumBadRequestParameters         UpdateGatewayResponseResponseTypeEnum = "BAD_REQUEST_PARAMETERS"
	UpdateGatewayResponseResponseTypeEnumBadRequestBody               UpdateGatewayResponseResponseTypeEnum = "BAD_REQUEST_BODY"
	UpdateGatewayResponseResponseTypeEnumRequestTooLarge              UpdateGatewayResponseResponseTypeEnum = "REQUEST_TOO_LARGE"
	UpdateGatewayResponseResponseTypeEnumThrottled                    UpdateGatewayResponseResponseTypeEnum = "THROTTLED"
	UpdateGatewayResponseResponseTypeEnumQuotaExceeded                UpdateGatewayResponseResponseTypeEnum = "QUOTA_EXCEEDED"
	UpdateGatewayResponseResponseTypeEnumWafFiltered                  UpdateGatewayResponseResponseTypeEnum = "WAF_FILTERED"
)

type UpdateGatewayResponsePathParams struct {
	ResponseType UpdateGatewayResponseResponseTypeEnum `pathParam:"style=simple,explode=false,name=response_type"`
	RestapiID    string                                `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type UpdateGatewayResponseHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateGatewayResponseRequestBody struct {
	PatchOperations []shared.PatchOperation `json:"patchOperations,omitempty"`
}

type UpdateGatewayResponseRequest struct {
	PathParams UpdateGatewayResponsePathParams
	Headers    UpdateGatewayResponseHeaders
	Request    UpdateGatewayResponseRequestBody `request:"mediaType=application/json"`
}

type UpdateGatewayResponseResponse struct {
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
