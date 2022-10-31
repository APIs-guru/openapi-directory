package operations

import (
"openapi/pkg/models/shared")

type GetSchemaAsJSONHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzDataPartition string `header:"style=simple,explode=false,name=x-amz-data-partition"`
    
}

type GetSchemaAsJSONRequest struct {
    Headers GetSchemaAsJSONHeaders 
    
}

type GetSchemaAsJSONResponse struct {
    AccessDeniedException *shared.AccessDeniedException 
    ContentType string 
    GetSchemaAsJSONResponse *shared.GetSchemaAsJSONResponse 
    InternalServiceException *shared.InternalServiceException 
    InvalidArnException *shared.InvalidArnException 
    LimitExceededException *shared.LimitExceededException 
    ResourceNotFoundException *shared.ResourceNotFoundException 
    RetryableConflictException *shared.RetryableConflictException 
    StatusCode int64 
    ValidationException *shared.ValidationException 
    
}

