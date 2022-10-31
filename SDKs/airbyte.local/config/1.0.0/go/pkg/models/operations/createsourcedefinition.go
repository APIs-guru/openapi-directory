package operations

import (
"openapi/pkg/models/shared")

type CreateSourceDefinitionRequest struct {
    Request *shared.SourceDefinitionCreate `request:"mediaType=application/json"`
    
}

type CreateSourceDefinitionResponse struct {
    ContentType string 
    InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo 
    SourceDefinitionRead *shared.SourceDefinitionRead 
    StatusCode int64 
    
}

