package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAPIHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateAPIRequestBodyCorsConfiguration struct {
	AllowCredentials *bool    `json:"AllowCredentials"`
	AllowHeaders     []string `json:"AllowHeaders"`
	AllowMethods     []string `json:"AllowMethods"`
	AllowOrigins     []string `json:"AllowOrigins"`
	ExposeHeaders    []string `json:"ExposeHeaders"`
	MaxAge           *int64   `json:"MaxAge"`
}

type CreateAPIRequestBodyProtocolTypeEnum string

const (
	CreateAPIRequestBodyProtocolTypeEnumWebsocket CreateAPIRequestBodyProtocolTypeEnum = "WEBSOCKET"
	CreateAPIRequestBodyProtocolTypeEnumHTTP      CreateAPIRequestBodyProtocolTypeEnum = "HTTP"
)

type CreateAPIRequestBody struct {
	APIKeySelectionExpression *string                                `json:"apiKeySelectionExpression"`
	CorsConfiguration         *CreateAPIRequestBodyCorsConfiguration `json:"corsConfiguration"`
	CredentialsArn            *string                                `json:"credentialsArn"`
	Description               *string                                `json:"description"`
	DisableExecuteAPIEndpoint *bool                                  `json:"disableExecuteApiEndpoint"`
	DisableSchemaValidation   *bool                                  `json:"disableSchemaValidation"`
	Name                      string                                 `json:"name"`
	ProtocolType              CreateAPIRequestBodyProtocolTypeEnum   `json:"protocolType"`
	RouteKey                  *string                                `json:"routeKey"`
	RouteSelectionExpression  *string                                `json:"routeSelectionExpression"`
	Tags                      map[string]string                      `json:"tags"`
	Target                    *string                                `json:"target"`
	Version                   *string                                `json:"version"`
}

type CreateAPIRequest struct {
	Headers CreateAPIHeaders
	Request CreateAPIRequestBody `request:"mediaType=application/json"`
}

type CreateAPIResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	CreateAPIResponse        *shared.CreateAPIResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
