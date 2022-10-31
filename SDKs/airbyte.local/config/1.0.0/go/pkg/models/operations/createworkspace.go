package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWorkspaceRequest struct {
	Request shared.WorkspaceCreate `request:"mediaType=application/json"`
}

type CreateWorkspaceResponse struct {
	ContentType               string
	InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo
	StatusCode                int64
	WorkspaceRead             *shared.WorkspaceRead
}
