package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAuthorizerPathParams struct {
	AuthorizerName string `pathParam:"style=simple,explode=false,name=authorizerName"`
}

type UpdateAuthorizerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateAuthorizerRequestBodyStatusEnum string

const (
	UpdateAuthorizerRequestBodyStatusEnumActive   UpdateAuthorizerRequestBodyStatusEnum = "ACTIVE"
	UpdateAuthorizerRequestBodyStatusEnumInactive UpdateAuthorizerRequestBodyStatusEnum = "INACTIVE"
)

type UpdateAuthorizerRequestBody struct {
	AuthorizerFunctionArn  *string                                `json:"authorizerFunctionArn"`
	Status                 *UpdateAuthorizerRequestBodyStatusEnum `json:"status"`
	TokenKeyName           *string                                `json:"tokenKeyName"`
	TokenSigningPublicKeys map[string]string                      `json:"tokenSigningPublicKeys"`
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
