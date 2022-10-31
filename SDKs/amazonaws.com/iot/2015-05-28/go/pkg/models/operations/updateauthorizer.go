package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAuthorizerPathParams struct {
	AuthorizerName string `pathParam:"style=simple,explode=false,name=authorizerName"`
}

type UpdateAuthorizerHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateAuthorizerRequestBodyStatusEnum string

const (
	UpdateAuthorizerRequestBodyStatusEnumActive   UpdateAuthorizerRequestBodyStatusEnum = "ACTIVE"
	UpdateAuthorizerRequestBodyStatusEnumInactive UpdateAuthorizerRequestBodyStatusEnum = "INACTIVE"
)

type UpdateAuthorizerRequestBody struct {
	AuthorizerFunctionArn  *string                                `json:"authorizerFunctionArn,omitempty"`
	Status                 *UpdateAuthorizerRequestBodyStatusEnum `json:"status,omitempty"`
	TokenKeyName           *string                                `json:"tokenKeyName,omitempty"`
	TokenSigningPublicKeys map[string]string                      `json:"tokenSigningPublicKeys,omitempty"`
}

type UpdateAuthorizerRequest struct {
	PathParams UpdateAuthorizerPathParams
	Headers    UpdateAuthorizerHeaders
	Request    UpdateAuthorizerRequestBody `request:"mediaType=application/json"`
}

type UpdateAuthorizerResponse struct {
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	LimitExceededException      *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
	UpdateAuthorizerResponse    *shared.UpdateAuthorizerResponse
}
