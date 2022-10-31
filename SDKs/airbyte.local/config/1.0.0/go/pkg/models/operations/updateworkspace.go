package operations

import (
"openapi/pkg/models/shared")

type UpdateWorkspaceRequest struct {
    Request shared.WorkspaceUpdate `request:"mediaType=application/json"`
    
}

type UpdateWorkspaceResponse struct {
    ContentType string 
    InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo 
    NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo 
    StatusCode int64 
    WorkspaceRead *shared.WorkspaceRead 
    
}

