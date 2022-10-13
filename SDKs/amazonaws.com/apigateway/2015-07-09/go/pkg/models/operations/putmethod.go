package operations

import (
	"openapi/pkg/models/shared"
)

type PutMethodPathParams struct {
	HTTPMethod string `pathParam:"style=simple,explode=false,name=http_method"`
	ResourceID string `pathParam:"style=simple,explode=false,name=resource_id"`
	RestapiID  string `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type PutMethodHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutMethodRequestBody struct {
	APIKeyRequired      *bool             `json:"apiKeyRequired"`
	AuthorizationScopes []string          `json:"authorizationScopes"`
	AuthorizationType   string            `json:"authorizationType"`
	AuthorizerID        *string           `json:"authorizerId"`
	OperationName       *string           `json:"operationName"`
	RequestModels       map[string]string `json:"requestModels"`
	RequestParameters   map[string]bool   `json:"requestParameters"`
	RequestValidatorID  *string           `json:"requestValidatorId"`
}

type PutMethodRequest struct {
	PathParams PutMethodPathParams
	Headers    PutMethodHeaders
	Request    PutMethodRequestBody `request:"mediaType=application/json"`
}

type PutMethodResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	LimitExceededException   *interface{}
	Method                   *shared.Method
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
