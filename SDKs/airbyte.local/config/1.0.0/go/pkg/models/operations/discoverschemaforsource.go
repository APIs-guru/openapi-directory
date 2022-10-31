package operations

import (
"openapi/pkg/models/shared")

type DiscoverSchemaForSourceRequest struct {
    Request shared.SourceIDRequestBody `request:"mediaType=application/json"`
    
}

type DiscoverSchemaForSourceResponse struct {
    ContentType string 
    InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo 
    NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo 
    SourceDiscoverSchemaRead *shared.SourceDiscoverSchemaRead 
    StatusCode int64 
    
}

