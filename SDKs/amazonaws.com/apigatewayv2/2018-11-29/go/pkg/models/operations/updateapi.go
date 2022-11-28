package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAPIPathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type UpdateAPIHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateAPIRequestBodyCorsConfiguration
// Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.
type UpdateAPIRequestBodyCorsConfiguration struct {
	AllowCredentials *bool    `json:"AllowCredentials,omitempty"`
	AllowHeaders     []string `json:"AllowHeaders,omitempty"`
	AllowMethods     []string `json:"AllowMethods,omitempty"`
	AllowOrigins     []string `json:"AllowOrigins,omitempty"`
	ExposeHeaders    []string `json:"ExposeHeaders,omitempty"`
	MaxAge           *int64   `json:"MaxAge,omitempty"`
}

type UpdateAPIRequestBody struct {
	APIKeySelectionExpression *string                                `json:"apiKeySelectionExpression,omitempty"`
	CorsConfiguration         *UpdateAPIRequestBodyCorsConfiguration `json:"corsConfiguration,omitempty"`
	CredentialsArn            *string                                `json:"credentialsArn,omitempty"`
	Description               *string                                `json:"description,omitempty"`
	DisableExecuteAPIEndpoint *bool                                  `json:"disableExecuteApiEndpoint,omitempty"`
	DisableSchemaValidation   *bool                                  `json:"disableSchemaValidation,omitempty"`
	Name                      *string                                `json:"name,omitempty"`
	RouteKey                  *string                                `json:"routeKey,omitempty"`
	RouteSelectionExpression  *string                                `json:"routeSelectionExpression,omitempty"`
	Target                    *string                                `json:"target,omitempty"`
	Version                   *string                                `json:"version,omitempty"`
}

type UpdateAPIRequest struct {
	PathParams UpdateAPIPathParams
	Headers    UpdateAPIHeaders
	Request    UpdateAPIRequestBody `request:"mediaType=application/json"`
}

type UpdateAPIResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UpdateAPIResponse        *shared.UpdateAPIResponse
}
