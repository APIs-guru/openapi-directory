package operations

import (
"openapi/pkg/models/shared")

type GetDestinationDefinitionRequest struct {
    Request shared.DestinationDefinitionIDRequestBody `request:"mediaType=application/json"`
    
}

type GetDestinationDefinitionResponse struct {
    ContentType string 
    DestinationDefinitionRead *shared.DestinationDefinitionRead 
    InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo 
    NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo 
    StatusCode int64 
    
}

