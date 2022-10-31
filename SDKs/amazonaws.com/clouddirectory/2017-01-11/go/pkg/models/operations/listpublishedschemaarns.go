package operations

import (
"openapi/pkg/models/shared")

type ListPublishedSchemaArnsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}

type ListPublishedSchemaArnsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListPublishedSchemaArnsRequestBody struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    SchemaArn *string `json:"SchemaArn,omitempty"`
    
}

type ListPublishedSchemaArnsRequest struct {
    QueryParams ListPublishedSchemaArnsQueryParams 
    Headers ListPublishedSchemaArnsHeaders 
    Request ListPublishedSchemaArnsRequestBody `request:"mediaType=application/json"`
    
}

type ListPublishedSchemaArnsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServiceException *interface{} 
    InvalidArnException *interface{} 
    InvalidNextTokenException *interface{} 
    LimitExceededException *interface{} 
    ListPublishedSchemaArnsResponse *shared.ListPublishedSchemaArnsResponse 
    ResourceNotFoundException *interface{} 
    RetryableConflictException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

