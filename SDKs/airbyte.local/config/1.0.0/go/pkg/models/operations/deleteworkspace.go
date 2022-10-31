package operations

import (
"openapi/pkg/models/shared")

type DeleteWorkspaceRequest struct {
    Request shared.WorkspaceIDRequestBody `request:"mediaType=application/json"`
    
}

type DeleteWorkspaceResponse struct {
    ContentType string 
    InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo 
    NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo 
    StatusCode int64 
    
}

