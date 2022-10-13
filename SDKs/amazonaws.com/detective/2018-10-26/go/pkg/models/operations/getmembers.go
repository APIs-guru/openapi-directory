package operations

import (
	"openapi/pkg/models/shared"
)

type GetMembersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetMembersRequestBody struct {
	AccountIds []string `json:"AccountIds"`
	GraphArn   string   `json:"GraphArn"`
}

type GetMembersRequest struct {
	Headers GetMembersHeaders
	Request GetMembersRequestBody `request:"mediaType=application/json"`
}

type GetMembersResponse struct {
	ContentType               string
	GetMembersResponse        *shared.GetMembersResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
