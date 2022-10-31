package operations

import (
"openapi/pkg/models/shared")

type WebBackendRecreateSourceRequest struct {
    Request shared.SourceRecreate `request:"mediaType=application/json"`
    
}

type WebBackendRecreateSourceResponse struct {
    ContentType string 
    InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo 
    SourceRead *shared.SourceRead 
    StatusCode int64 
    
}

