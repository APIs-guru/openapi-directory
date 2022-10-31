package operations

import (
"openapi/pkg/models/shared")

type CheckConnectionToSourceRequest struct {
    Request shared.SourceIDRequestBody `request:"mediaType=application/json"`
    
}

type CheckConnectionToSourceResponse struct {
    CheckConnectionRead *shared.CheckConnectionRead 
    ContentType string 
    InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo 
    NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo 
    StatusCode int64 
    
}

