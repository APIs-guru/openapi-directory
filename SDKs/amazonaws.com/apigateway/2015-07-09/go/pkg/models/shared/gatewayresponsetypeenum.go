package shared

type GatewayResponseTypeEnum string

const (
	GatewayResponseTypeEnumDefault4Xx                   GatewayResponseTypeEnum = "DEFAULT_4XX"
	GatewayResponseTypeEnumDefault5Xx                   GatewayResponseTypeEnum = "DEFAULT_5XX"
	GatewayResponseTypeEnumResourceNotFound             GatewayResponseTypeEnum = "RESOURCE_NOT_FOUND"
	GatewayResponseTypeEnumUnauthorized                 GatewayResponseTypeEnum = "UNAUTHORIZED"
	GatewayResponseTypeEnumInvalidAPIKey                GatewayResponseTypeEnum = "INVALID_API_KEY"
	GatewayResponseTypeEnumAccessDenied                 GatewayResponseTypeEnum = "ACCESS_DENIED"
	GatewayResponseTypeEnumAuthorizerFailure            GatewayResponseTypeEnum = "AUTHORIZER_FAILURE"
	GatewayResponseTypeEnumAuthorizerConfigurationError GatewayResponseTypeEnum = "AUTHORIZER_CONFIGURATION_ERROR"
	GatewayResponseTypeEnumInvalidSignature             GatewayResponseTypeEnum = "INVALID_SIGNATURE"
	GatewayResponseTypeEnumExpiredToken                 GatewayResponseTypeEnum = "EXPIRED_TOKEN"
	GatewayResponseTypeEnumMissingAuthenticationToken   GatewayResponseTypeEnum = "MISSING_AUTHENTICATION_TOKEN"
	GatewayResponseTypeEnumIntegrationFailure           GatewayResponseTypeEnum = "INTEGRATION_FAILURE"
	GatewayResponseTypeEnumIntegrationTimeout           GatewayResponseTypeEnum = "INTEGRATION_TIMEOUT"
	GatewayResponseTypeEnumAPIConfigurationError        GatewayResponseTypeEnum = "API_CONFIGURATION_ERROR"
	GatewayResponseTypeEnumUnsupportedMediaType         GatewayResponseTypeEnum = "UNSUPPORTED_MEDIA_TYPE"
	GatewayResponseTypeEnumBadRequestParameters         GatewayResponseTypeEnum = "BAD_REQUEST_PARAMETERS"
	GatewayResponseTypeEnumBadRequestBody               GatewayResponseTypeEnum = "BAD_REQUEST_BODY"
	GatewayResponseTypeEnumRequestTooLarge              GatewayResponseTypeEnum = "REQUEST_TOO_LARGE"
	GatewayResponseTypeEnumThrottled                    GatewayResponseTypeEnum = "THROTTLED"
	GatewayResponseTypeEnumQuotaExceeded                GatewayResponseTypeEnum = "QUOTA_EXCEEDED"
	GatewayResponseTypeEnumWafFiltered                  GatewayResponseTypeEnum = "WAF_FILTERED"
)
