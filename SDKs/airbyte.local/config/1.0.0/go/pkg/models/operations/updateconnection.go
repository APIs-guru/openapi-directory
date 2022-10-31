package operations

import (
"openapi/pkg/models/shared")

type UpdateConnectionRequest struct {
    Request shared.ConnectionUpdate `request:"mediaType=application/json"`
    
}

type UpdateConnectionResponse struct {
    ConnectionRead *shared.ConnectionRead 
    ContentType string 
    InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo 
    StatusCode int64 
    
}

