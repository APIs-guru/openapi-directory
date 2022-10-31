package operations

import (
"openapi/pkg/models/shared")

type DeleteSourceRequest struct {
    Request shared.SourceIDRequestBody `request:"mediaType=application/json"`
    
}

type DeleteSourceResponse struct {
    ContentType string 
    InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo 
    NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo 
    StatusCode int64 
    
}

