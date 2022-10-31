package operations

import (
"openapi/pkg/models/shared")

type AttachObjectHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzDataPartition string `header:"style=simple,explode=false,name=x-amz-data-partition"`
    
}

type AttachObjectRequestBodyChildReference struct {
    Selector *string `json:"Selector,omitempty"`
    
}

type AttachObjectRequestBodyParentReference struct {
    Selector *string `json:"Selector,omitempty"`
    
}

type AttachObjectRequestBody struct {
    ChildReference AttachObjectRequestBodyChildReference `json:"ChildReference"`
    LinkName string `json:"LinkName"`
    ParentReference AttachObjectRequestBodyParentReference `json:"ParentReference"`
    
}

type AttachObjectRequest struct {
    Headers AttachObjectHeaders 
    Request AttachObjectRequestBody `request:"mediaType=application/json"`
    
}

type AttachObjectResponse struct {
    AccessDeniedException *shared.AccessDeniedException 
    AttachObjectResponse *shared.AttachObjectResponse 
    ContentType string 
    DirectoryNotEnabledException *shared.DirectoryNotEnabledException 
    FacetValidationException *shared.FacetValidationException 
    InternalServiceException *shared.InternalServiceException 
    InvalidArnException *shared.InvalidArnException 
    InvalidAttachmentException *shared.InvalidAttachmentException 
    LimitExceededException *shared.LimitExceededException 
    LinkNameAlreadyInUseException *shared.LinkNameAlreadyInUseException 
    ResourceNotFoundException *shared.ResourceNotFoundException 
    RetryableConflictException *shared.RetryableConflictException 
    StatusCode int64 
    ValidationException *shared.ValidationException 
    
}

