package operations

import (
	"openapi/pkg/models/shared"
)

type WebBackendListConnectionsForWorkspaceRequest struct {
	Request shared.WorkspaceIDRequestBody `request:"mediaType=application/json"`
}

type WebBackendListConnectionsForWorkspaceResponse struct {
	ContentType                  string
	InvalidInputExceptionInfo    *shared.InvalidInputExceptionInfo
	NotFoundKnownExceptionInfo   *shared.NotFoundKnownExceptionInfo
	StatusCode                   int64
	WebBackendConnectionReadList *shared.WebBackendConnectionReadList
}
