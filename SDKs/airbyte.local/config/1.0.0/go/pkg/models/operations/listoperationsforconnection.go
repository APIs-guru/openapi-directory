package operations

import (
"openapi/pkg/models/shared")

type ListOperationsForConnectionRequest struct {
    Request shared.ConnectionIDRequestBody `request:"mediaType=application/json"`
    
}

type ListOperationsForConnectionResponse struct {
    ContentType string 
    InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo 
    NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo 
    OperationReadList *shared.OperationReadList 
    StatusCode int64 
    
}

