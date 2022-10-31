package operations

import (
"openapi/pkg/models/shared")

type DetachObjectHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzDataPartition string `header:"style=simple,explode=false,name=x-amz-data-partition"`
    
}

type DetachObjectRequestBodyParentReference struct {
    Selector *string `json:"Selector,omitempty"`
    
}

type DetachObjectRequestBody struct {
    LinkName string `json:"LinkName"`
    ParentReference DetachObjectRequestBodyParentReference `json:"ParentReference"`
    
}

type DetachObjectRequest struct {
    Headers DetachObjectHeaders 
    Request DetachObjectRequestBody `request:"mediaType=application/json"`
    
}

type DetachObjectResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DetachObjectResponse *shared.DetachObjectResponse 
    DirectoryNotEnabledException *interface{} 
    InternalServiceException *interface{} 
    InvalidArnException *interface{} 
    LimitExceededException *interface{} 
    NotNodeException *interface{} 
    ResourceNotFoundException *interface{} 
    RetryableConflictException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

