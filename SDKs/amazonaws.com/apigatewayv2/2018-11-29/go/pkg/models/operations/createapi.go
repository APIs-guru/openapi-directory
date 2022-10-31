package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAPIHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateAPIRequestBodyCorsConfiguration struct {
	AllowCredentials *bool    `json:"AllowCredentials,omitempty"`
	AllowHeaders     []string `json:"AllowHeaders,omitempty"`
	AllowMethods     []string `json:"AllowMethods,omitempty"`
	AllowOrigins     []string `json:"AllowOrigins,omitempty"`
	ExposeHeaders    []string `json:"ExposeHeaders,omitempty"`
	MaxAge           *int64   `json:"MaxAge,omitempty"`
}

type CreateAPIRequestBodyProtocolTypeEnum string

const (
	CreateAPIRequestBodyProtocolTypeEnumWebsocket CreateAPIRequestBodyProtocolTypeEnum = "WEBSOCKET"
	CreateAPIRequestBodyProtocolTypeEnumHTTP      CreateAPIRequestBodyProtocolTypeEnum = "HTTP"
)

type CreateAPIRequestBody struct {
	APIKeySelectionExpression *string                                `json:"apiKeySelectionExpression,omitempty"`
	CorsConfiguration         *CreateAPIRequestBodyCorsConfiguration `json:"corsConfiguration,omitempty"`
	CredentialsArn            *string                                `json:"credentialsArn,omitempty"`
	Description               *string                                `json:"description,omitempty"`
	DisableExecuteAPIEndpoint *bool                                  `json:"disableExecuteApiEndpoint,omitempty"`
	DisableSchemaValidation   *bool                                  `json:"disableSchemaValidation,omitempty"`
	Name                      string                                 `json:"name"`
	ProtocolType              CreateAPIRequestBodyProtocolTypeEnum   `json:"protocolType"`
	RouteKey                  *string                                `json:"routeKey,omitempty"`
	RouteSelectionExpression  *string                                `json:"routeSelectionExpression,omitempty"`
	Tags                      map[string]string                      `json:"tags,omitempty"`
	Target                    *string                                `json:"target,omitempty"`
	Version                   *string                                `json:"version,omitempty"`
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
