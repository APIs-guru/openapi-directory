package operations

import (
	"openapi/pkg/models/shared"
)

type SetDefaultAuthorizerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type SetDefaultAuthorizerRequestBody struct {
	AuthorizerName string `json:"authorizerName"`
}

type SetDefaultAuthorizerRequest struct {
	Headers SetDefaultAuthorizerHeaders
	Request SetDefaultAuthorizerRequestBody `request:"mediaType=application/json"`
}

type SetDefaultAuthorizerResponse struct {
	ContentType                    string
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	ResourceAlreadyExistsException *interface{}
	ResourceNotFoundException      *interface{}
	ServiceUnavailableException    *interface{}
	SetDefaultAuthorizerResponse   *shared.SetDefaultAuthorizerResponse
	StatusCode                     int64
	ThrottlingException            *interface{}
	UnauthorizedException          *interface{}
}
