package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteMembersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteMembersRequestBody struct {
	AccountIds []string `json:"AccountIds"`
	GraphArn   string   `json:"GraphArn"`
}

type DeleteMembersRequest struct {
	Headers DeleteMembersHeaders
	Request DeleteMembersRequestBody `request:"mediaType=application/json"`
}

type DeleteMembersResponse struct {
	ConflictException         *interface{}
	ContentType               string
	DeleteMembersResponse     *shared.DeleteMembersResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
