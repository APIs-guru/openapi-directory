package operations

import (
"openapi/pkg/models/shared")

type CreateIndexHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzDataPartition string `header:"style=simple,explode=false,name=x-amz-data-partition"`
    
}

type CreateIndexRequestBodyParentReference struct {
    Selector *string `json:"Selector,omitempty"`
    
}

type CreateIndexRequestBody struct {
    IsUnique bool `json:"IsUnique"`
    LinkName *string `json:"LinkName,omitempty"`
    OrderedIndexedAttributeList []shared.AttributeKey `json:"OrderedIndexedAttributeList"`
    ParentReference *CreateIndexRequestBodyParentReference `json:"ParentReference,omitempty"`
    
}

type CreateIndexRequest struct {
    Headers CreateIndexHeaders 
    Request CreateIndexRequestBody `request:"mediaType=application/json"`
    
}

type CreateIndexResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    CreateIndexResponse *shared.CreateIndexResponse 
    DirectoryNotEnabledException *interface{} 
    FacetValidationException *interface{} 
    InternalServiceException *interface{} 
    InvalidArnException *interface{} 
    LimitExceededException *interface{} 
    LinkNameAlreadyInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    RetryableConflictException *interface{} 
    StatusCode int64 
    UnsupportedIndexTypeException *interface{} 
    ValidationException *interface{} 
    
}

