package operations

import (
"openapi/pkg/models/shared")

type GetDestinationDefinitionSpecificationRequest struct {
    Request shared.DestinationDefinitionIDRequestBody `request:"mediaType=application/json"`
    
}

type GetDestinationDefinitionSpecificationResponse struct {
    ContentType string 
    DestinationDefinitionSpecificationRead *shared.DestinationDefinitionSpecificationRead 
    InvalidInputExceptionInfo *shared.InvalidInputExceptionInfo 
    NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo 
    StatusCode int64 
    
}

