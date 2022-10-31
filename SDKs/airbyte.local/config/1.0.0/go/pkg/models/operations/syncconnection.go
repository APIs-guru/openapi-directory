package operations

import (
"openapi/pkg/models/shared")

type SyncConnectionRequest struct {
    Request shared.ConnectionIDRequestBody `request:"mediaType=application/json"`
    
}

type SyncConnectionResponse struct {
    ContentType string 
    InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo 
    JobInfoRead *shared.JobInfoRead 
    NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo 
    StatusCode int64 
    
}

