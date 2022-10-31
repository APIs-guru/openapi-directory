package operations

import (
"openapi/pkg/models/shared")

type DeleteOperationRequest struct {
    Request shared.OperationIDRequestBody `request:"mediaType=application/json"`
    
}

type DeleteOperationResponse struct {
    ContentType string 
    InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo 
    NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo 
    StatusCode int64 
    
}

