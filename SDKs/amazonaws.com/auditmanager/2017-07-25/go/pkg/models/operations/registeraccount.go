package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterAccountHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type RegisterAccountRequestBody struct {
	DelegatedAdminAccount *string `json:"delegatedAdminAccount,omitempty"`
	KmsKey                *string `json:"kmsKey,omitempty"`
}

type RegisterAccountRequest struct {
	Headers RegisterAccountHeaders
	Request RegisterAccountRequestBody `request:"mediaType=application/json"`
}

type RegisterAccountResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	RegisterAccountResponse   *shared.RegisterAccountResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
