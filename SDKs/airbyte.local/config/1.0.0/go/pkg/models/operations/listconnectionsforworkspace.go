package operations

import (
"openapi/pkg/models/shared")

type ListConnectionsForWorkspaceRequest struct {
    Request shared.WorkspaceIDRequestBody `request:"mediaType=application/json"`
    
}

type ListConnectionsForWorkspaceResponse struct {
    ConnectionReadList *shared.ConnectionReadList 
    ContentType string 
    InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo 
    NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo 
    StatusCode int64 
    
}

