package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWorkspaceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateWorkspaceRequestBody struct {
	Alias       *string           `json:"alias,omitempty"`
	ClientToken *string           `json:"clientToken,omitempty"`
	Tags        map[string]string `json:"tags,omitempty"`
}

type CreateWorkspaceRequest struct {
	Headers CreateWorkspaceHeaders
	Request CreateWorkspaceRequestBody `request:"mediaType=application/json"`
}

type CreateWorkspaceResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreateWorkspaceResponse       *shared.CreateWorkspaceResponse
	InternalServerException       *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
