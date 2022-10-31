package operations

import (
	"openapi/pkg/models/shared"
)

type ListWorkspacesResponse struct {
	ContentType       string
	StatusCode        int64
	WorkspaceReadList *shared.WorkspaceReadList
}
