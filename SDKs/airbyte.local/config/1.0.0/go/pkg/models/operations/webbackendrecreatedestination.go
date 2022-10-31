package operations

import (
"openapi/pkg/models/shared")

type WebBackendRecreateDestinationRequest struct {
    Request shared.DestinationRecreate `request:"mediaType=application/json"`
    
}

type WebBackendRecreateDestinationResponse struct {
    ContentType string 
    DestinationRead *shared.DestinationRead 
    InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo 
    StatusCode int64 
    
}

