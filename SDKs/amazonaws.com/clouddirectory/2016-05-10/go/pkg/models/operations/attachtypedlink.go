package operations

import (
"openapi/pkg/models/shared")

type AttachTypedLinkHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzDataPartition string `header:"style=simple,explode=false,name=x-amz-data-partition"`
    
}

type AttachTypedLinkRequestBodySourceObjectReference struct {
    Selector *string `json:"Selector,omitempty"`
    
}

type AttachTypedLinkRequestBodyTargetObjectReference struct {
    Selector *string `json:"Selector,omitempty"`
    
}

type AttachTypedLinkRequestBodyTypedLinkFacet struct {
    SchemaArn *string `json:"SchemaArn,omitempty"`
    TypedLinkName *string `json:"TypedLinkName,omitempty"`
    
}

type AttachTypedLinkRequestBody struct {
    Attributes []shared.AttributeNameAndValue `json:"Attributes"`
    SourceObjectReference AttachTypedLinkRequestBodySourceObjectReference `json:"SourceObjectReference"`
    TargetObjectReference AttachTypedLinkRequestBodyTargetObjectReference `json:"TargetObjectReference"`
    TypedLinkFacet AttachTypedLinkRequestBodyTypedLinkFacet `json:"TypedLinkFacet"`
    
}

type AttachTypedLinkRequest struct {
    Headers AttachTypedLinkHeaders 
    Request AttachTypedLinkRequestBody `request:"mediaType=application/json"`
    
}

type AttachTypedLinkResponse struct {
    AccessDeniedException *shared.AccessDeniedException 
    AttachTypedLinkResponse *shared.AttachTypedLinkResponse 
    ContentType string 
    DirectoryNotEnabledException *shared.DirectoryNotEnabledException 
    FacetValidationException *shared.FacetValidationException 
    InternalServiceException *shared.InternalServiceException 
    InvalidArnException *shared.InvalidArnException 
    InvalidAttachmentException *shared.InvalidAttachmentException 
    LimitExceededException *shared.LimitExceededException 
    ResourceNotFoundException *shared.ResourceNotFoundException 
    RetryableConflictException *shared.RetryableConflictException 
    StatusCode int64 
    ValidationException *shared.ValidationException 
    
}

