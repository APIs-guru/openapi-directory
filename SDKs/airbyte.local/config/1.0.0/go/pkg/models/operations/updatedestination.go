package operations

import (
"openapi/pkg/models/shared")

type UpdateDestinationRequest struct {
    Request shared.DestinationUpdate `request:"mediaType=application/json"`
    
}

type UpdateDestinationResponse struct {
    ContentType string 
    DestinationRead *shared.DestinationRead 
    InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo 
    StatusCode int64 
    
}

