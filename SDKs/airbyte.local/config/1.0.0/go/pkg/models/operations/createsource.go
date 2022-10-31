package operations

import (
"openapi/pkg/models/shared")

type CreateSourceRequest struct {
    Request shared.SourceCreate `request:"mediaType=application/json"`
    
}

type CreateSourceResponse struct {
    ContentType string 
    InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo 
    SourceRead *shared.SourceRead 
    StatusCode int64 
    
}

