package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWorkspaceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateWorkspaceRequestBody struct {
	Alias       *string           `json:"alias"`
	ClientToken *string           `json:"clientToken"`
	Tags        map[string]string `json:"tags"`
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
