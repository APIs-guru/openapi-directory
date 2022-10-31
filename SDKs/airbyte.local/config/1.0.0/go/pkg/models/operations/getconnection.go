package operations

import (
"openapi/pkg/models/shared")

type GetConnectionRequest struct {
    Request shared.ConnectionIDRequestBody `request:"mediaType=application/json"`
    
}

type GetConnectionResponse struct {
    ConnectionRead *shared.ConnectionRead 
    ContentType string 
    InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo 
    NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo 
    StatusCode int64 
    
}

