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
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServiceException *interface{} 
    InvalidArnException *interface{} 
    InvalidRuleException *interface{} 
    InvalidSchemaDocException *interface{} 
    LimitExceededException *interface{} 
    PutSchemaFromJSONResponse *shared.PutSchemaFromJSONResponse 
    RetryableConflictException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

