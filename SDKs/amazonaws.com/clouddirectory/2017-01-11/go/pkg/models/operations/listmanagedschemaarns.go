package operations

import (
"openapi/pkg/models/shared")

type ListManagedSchemaArnsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}

type ListManagedSchemaArnsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListManagedSchemaArnsRequestBody struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    SchemaArn *string `json:"SchemaArn,omitempty"`
    
}

type ListManagedSchemaArnsRequest struct {
    QueryParams ListManagedSchemaArnsQueryParams 
    Headers ListManagedSchemaArnsHeaders 
    Request ListManagedSchemaArnsRequestBody `request:"mediaType=application/json"`
    
}

type ListManagedSchemaArnsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServiceException *interface{} 
    InvalidArnException *interface{} 
    InvalidNextTokenException *interface{} 
    ListManagedSchemaArnsResponse *shared.ListManagedSchemaArnsResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

