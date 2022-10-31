package operations

import (
"openapi/pkg/models/shared")

type CheckConnectionToDestinationForUpdateRequest struct {
    Request shared.DestinationUpdate `request:"mediaType=application/json"`
    
}

type CheckConnectionToDestinationForUpdateResponse struct {
    CheckConnectionRead *shared.CheckConnectionRead 
    ContentType string 
    InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo 
    NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo 
    StatusCode int64 
    
}

