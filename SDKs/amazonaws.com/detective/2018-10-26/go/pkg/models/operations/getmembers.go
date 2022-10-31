package operations

import (
	"openapi/pkg/models/shared"
)

type GetMembersHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
