package operations

import (
"openapi/pkg/models/shared")

type WebBackendCreateConnectionRequest struct {
    Request shared.WebBackendConnectionCreate `request:"mediaType=application/json"`
    
}

type WebBackendCreateConnectionResponse struct {
    ContentType string 
    InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo 
    StatusCode int64 
    WebBackendConnectionRead *shared.WebBackendConnectionRead 
    
}

