package operations

import (
"openapi/pkg/models/shared")

type ListDestinationsForWorkspaceRequest struct {
    Request shared.WorkspaceIDRequestBody `request:"mediaType=application/json"`
    
}

type ListDestinationsForWorkspaceResponse struct {
    ContentType string 
    DestinationReadList *shared.DestinationReadList 
    InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo 
    NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo 
    StatusCode int64 
    
}

