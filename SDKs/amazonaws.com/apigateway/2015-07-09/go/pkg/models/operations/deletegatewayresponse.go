package operations

type DeleteGatewayResponseResponseTypeEnum string

const (
	DeleteGatewayResponseResponseTypeEnumDefault4Xx                   DeleteGatewayResponseResponseTypeEnum = "DEFAULT_4XX"
	DeleteGatewayResponseResponseTypeEnumDefault5Xx                   DeleteGatewayResponseResponseTypeEnum = "DEFAULT_5XX"
	DeleteGatewayResponseResponseTypeEnumResourceNotFound             DeleteGatewayResponseResponseTypeEnum = "RESOURCE_NOT_FOUND"
	DeleteGatewayResponseResponseTypeEnumUnauthorized                 DeleteGatewayResponseResponseTypeEnum = "UNAUTHORIZED"
	DeleteGatewayResponseResponseTypeEnumInvalidAPIKey                DeleteGatewayResponseResponseTypeEnum = "INVALID_API_KEY"
	DeleteGatewayResponseResponseTypeEnumAccessDenied                 DeleteGatewayResponseResponseTypeEnum = "ACCESS_DENIED"
	DeleteGatewayResponseResponseTypeEnumAuthorizerFailure            DeleteGatewayResponseResponseTypeEnum = "AUTHORIZER_FAILURE"
	DeleteGatewayResponseResponseTypeEnumAuthorizerConfigurationError DeleteGatewayResponseResponseTypeEnum = "AUTHORIZER_CONFIGURATION_ERROR"
	DeleteGatewayResponseResponseTypeEnumInvalidSignature             DeleteGatewayResponseResponseTypeEnum = "INVALID_SIGNATURE"
	DeleteGatewayResponseResponseTypeEnumExpiredToken                 DeleteGatewayResponseResponseTypeEnum = "EXPIRED_TOKEN"
	DeleteGatewayResponseResponseTypeEnumMissingAuthenticationToken   DeleteGatewayResponseResponseTypeEnum = "MISSING_AUTHENTICATION_TOKEN"
	DeleteGatewayResponseResponseTypeEnumIntegrationFailure           DeleteGatewayResponseResponseTypeEnum = "INTEGRATION_FAILURE"
	DeleteGatewayResponseResponseTypeEnumIntegrationTimeout           DeleteGatewayResponseResponseTypeEnum = "INTEGRATION_TIMEOUT"
	DeleteGatewayResponseResponseTypeEnumAPIConfigurationError        DeleteGatewayResponseResponseTypeEnum = "API_CONFIGURATION_ERROR"
	DeleteGatewayResponseResponseTypeEnumUnsupportedMediaType         DeleteGatewayResponseResponseTypeEnum = "UNSUPPORTED_MEDIA_TYPE"
	DeleteGatewayResponseResponseTypeEnumBadRequestParameters         DeleteGatewayResponseResponseTypeEnum = "BAD_REQUEST_PARAMETERS"
	DeleteGatewayResponseResponseTypeEnumBadRequestBody               DeleteGatewayResponseResponseTypeEnum = "BAD_REQUEST_BODY"
	DeleteGatewayResponseResponseTypeEnumRequestTooLarge              DeleteGatewayResponseResponseTypeEnum = "REQUEST_TOO_LARGE"
	DeleteGatewayResponseResponseTypeEnumThrottled                    DeleteGatewayResponseResponseTypeEnum = "THROTTLED"
	DeleteGatewayResponseResponseTypeEnumQuotaExceeded                DeleteGatewayResponseResponseTypeEnum = "QUOTA_EXCEEDED"
	DeleteGatewayResponseResponseTypeEnumWafFiltered                  DeleteGatewayResponseResponseTypeEnum = "WAF_FILTERED"
)

type DeleteGatewayResponsePathParams struct {
	ResponseType DeleteGatewayResponseResponseTypeEnum `pathParam:"style=simple,explode=false,name=response_type"`
	RestapiID    string                                `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type DeleteGatewayResponseHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteGatewayResponseRequest struct {
	PathParams DeleteGatewayResponsePathParams
	Headers    DeleteGatewayResponseHeaders
}

type DeleteGatewayResponseResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
