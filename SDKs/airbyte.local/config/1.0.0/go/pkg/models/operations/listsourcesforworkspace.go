package operations

import (
	"openapi/pkg/models/shared"
)

type ListSourcesForWorkspaceRequest struct {
	Request shared.WorkspaceIDRequestBody `request:"mediaType=application/json"`
}

type ListSourcesForWorkspaceResponse struct {
	ContentType                string
	InvalidInputExceptionInfo  *shared.InvalidInputExceptionInfo
	NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo
	SourceReadList             *shared.SourceReadList
	StatusCode                 int64
}
