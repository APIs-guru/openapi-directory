package operations

import (
"openapi/pkg/models/shared")

type UpdateDestinationDefinitionRequest struct {
    Request shared.DestinationDefinitionUpdate `request:"mediaType=application/json"`
    
}

type UpdateDestinationDefinitionResponse struct {
    ContentType string 
    DestinationDefinitionRead *shared.DestinationDefinitionRead 
    InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo 
    NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo 
    StatusCode int64 
    
}

