package operations

import (
"openapi/pkg/models/shared")

type ExecuteSourceCheckConnectionRequest struct {
    Request shared.SourceCoreConfig `request:"mediaType=application/json"`
    
}

type ExecuteSourceCheckConnectionResponse struct {
    CheckConnectionRead *shared.CheckConnectionRead 
    ContentType string 
    InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo 
    StatusCode int64 
    
}

