package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAPIPathParams struct {
	APIID string `pathParam:"style=simple,explode=false,name=apiId"`
}

type UpdateAPIHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateAPIRequestBodyCorsConfiguration struct {
	AllowCredentials *bool    `json:"AllowCredentials"`
	AllowHeaders     []string `json:"AllowHeaders"`
	AllowMethods     []string `json:"AllowMethods"`
	AllowOrigins     []string `json:"AllowOrigins"`
	ExposeHeaders    []string `json:"ExposeHeaders"`
	MaxAge           *int64   `json:"MaxAge"`
}

type UpdateAPIRequestBody struct {
	APIKeySelectionExpression *string                                `json:"apiKeySelectionExpression"`
	CorsConfiguration         *UpdateAPIRequestBodyCorsConfiguration `json:"corsConfiguration"`
	CredentialsArn            *string                                `json:"credentialsArn"`
	Description               *string                                `json:"description"`
	DisableExecuteAPIEndpoint *bool                                  `json:"disableExecuteApiEndpoint"`
	DisableSchemaValidation   *bool                                  `json:"disableSchemaValidation"`
	Name                      *string                                `json:"name"`
	RouteKey                  *string                                `json:"routeKey"`
	RouteSelectionExpression  *string                                `json:"routeSelectionExpression"`
	Target                    *string                                `json:"target"`
	Version                   *string                                `json:"version"`
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
