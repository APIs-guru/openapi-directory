package operations

import (
"openapi/pkg/models/shared")

type CreateDestinationRequest struct {
    Request shared.DestinationCreate `request:"mediaType=application/json"`
    
}

type CreateDestinationResponse struct {
    ContentType string 
    DestinationRead *shared.DestinationRead 
    InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo 
    StatusCode int64 
    
}

