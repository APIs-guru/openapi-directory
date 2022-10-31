package operations

import (
"openapi/pkg/models/shared")

type DetachTypedLinkHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzDataPartition string `header:"style=simple,explode=false,name=x-amz-data-partition"`
    
}

type DetachTypedLinkRequestBodyTypedLinkSpecifier struct {
    IdentityAttributeValues []shared.AttributeNameAndValue `json:"IdentityAttributeValues,omitempty"`
    SourceObjectReference *shared.ObjectReference `json:"SourceObjectReference,omitempty"`
    TargetObjectReference *shared.ObjectReference `json:"TargetObjectReference,omitempty"`
    TypedLinkFacet *shared.TypedLinkSchemaAndFacetName `json:"TypedLinkFacet,omitempty"`
    
}

type DetachTypedLinkRequestBody struct {
    TypedLinkSpecifier DetachTypedLinkRequestBodyTypedLinkSpecifier `json:"TypedLinkSpecifier"`
    
}

type DetachTypedLinkRequest struct {
    Headers DetachTypedLinkHeaders 
    Request DetachTypedLinkRequestBody `request:"mediaType=application/json"`
    
}

type DetachTypedLinkResponse struct {
    AccessDeniedException *shared.AccessDeniedException 
    ContentType string 
    DirectoryNotEnabledException *shared.DirectoryNotEnabledException 
    FacetValidationException *shared.FacetValidationException 
    InternalServiceException *shared.InternalServiceException 
    InvalidArnException *shared.InvalidArnException 
    LimitExceededException *shared.LimitExceededException 
    ResourceNotFoundException *shared.ResourceNotFoundException 
    RetryableConflictException *shared.RetryableConflictException 
    StatusCode int64 
    ValidationException *shared.ValidationException 
    
}

