package operations

import (
"openapi/pkg/models/shared")

type UpdateOperationRequest struct {
    Request shared.OperationUpdate `request:"mediaType=application/json"`
    
}

type UpdateOperationResponse struct {
    ContentType string 
    InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo 
    OperationRead *shared.OperationRead 
    StatusCode int64 
    
}

