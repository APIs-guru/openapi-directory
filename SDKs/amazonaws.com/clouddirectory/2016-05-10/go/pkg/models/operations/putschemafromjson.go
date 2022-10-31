package operations

import (
"openapi/pkg/models/shared")

type PutSchemaFromJSONHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzDataPartition string `header:"style=simple,explode=false,name=x-amz-data-partition"`
    
}

type PutSchemaFromJSONRequestBody struct {
    Document string `json:"Document"`
    
}

type PutSchemaFromJSONRequest struct {
    Headers PutSchemaFromJSONHeaders 
    Request PutSchemaFromJSONRequestBody `request:"mediaType=application/json"`
    
}

type PutSchemaFromJSONResponse struct {
    AccessDeniedException *shared.AccessDeniedException 
    ContentType string 
    InternalServiceException *shared.InternalServiceException 
    InvalidArnException *shared.InvalidArnException 
    InvalidRuleException *shared.InvalidRuleException 
    InvalidSchemaDocException *shared.InvalidSchemaDocException 
    LimitExceededException *shared.LimitExceededException 
    PutSchemaFromJSONResponse *shared.PutSchemaFromJSONResponse 
    RetryableConflictException *shared.RetryableConflictException 
    StatusCode int64 
    ValidationException *shared.ValidationException 
    
}

