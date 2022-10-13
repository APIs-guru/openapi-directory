package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkspaceBySlugRequest struct {
	Request shared.SlugRequestBody `request:"mediaType=application/json"`
}

type GetWorkspaceBySlugResponse struct {
	ContentType                string
	InvalidInputExceptionInfo  *shared.InvalidInputExceptionInfo
	NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo
	StatusCode                 int64
	WorkspaceRead              *shared.WorkspaceRead
}
