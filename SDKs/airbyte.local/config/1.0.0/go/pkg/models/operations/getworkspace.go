package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkspaceRequest struct {
	Request shared.WorkspaceIDRequestBody `request:"mediaType=application/json"`
}

type GetWorkspaceResponse struct {
	ContentType                string
	InvalidInputExceptionInfo  *shared.InvalidInputExceptionInfo
	NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo
	StatusCode                 int64
	WorkspaceRead              *shared.WorkspaceRead
}
