package operations

import (
"openapi/pkg/models/shared")

type GetLinkAttributesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzDataPartition string `header:"style=simple,explode=false,name=x-amz-data-partition"`
    
}


type GetLinkAttributesRequestBodyConsistencyLevelEnum string

const (
    GetLinkAttributesRequestBodyConsistencyLevelEnumSerializable GetLinkAttributesRequestBodyConsistencyLevelEnum = "SERIALIZABLE"
GetLinkAttributesRequestBodyConsistencyLevelEnumEventual GetLinkAttributesRequestBodyConsistencyLevelEnum = "EVENTUAL"
)


type GetLinkAttributesRequestBodyTypedLinkSpecifier struct {
    IdentityAttributeValues []shared.AttributeNameAndValue `json:"IdentityAttributeValues,omitempty"`
    SourceObjectReference *shared.ObjectReference `json:"SourceObjectReference,omitempty"`
    TargetObjectReference *shared.ObjectReference `json:"TargetObjectReference,omitempty"`
    TypedLinkFacet *shared.TypedLinkSchemaAndFacetName `json:"TypedLinkFacet,omitempty"`
    
}

type GetLinkAttributesRequestBody struct {
    AttributeNames []string `json:"AttributeNames"`
    ConsistencyLevel *GetLinkAttributesRequestBodyConsistencyLevelEnum `json:"ConsistencyLevel,omitempty"`
    TypedLinkSpecifier GetLinkAttributesRequestBodyTypedLinkSpecifier `json:"TypedLinkSpecifier"`
    
}

type GetLinkAttributesRequest struct {
    Headers GetLinkAttributesHeaders 
    Request GetLinkAttributesRequestBody `request:"mediaType=application/json"`
    
}

type GetLinkAttributesResponse struct {
    AccessDeniedException *shared.AccessDeniedException 
    ContentType string 
    DirectoryNotEnabledException *shared.DirectoryNotEnabledException 
    FacetValidationException *shared.FacetValidationException 
    GetLinkAttributesResponse *shared.GetLinkAttributesResponse 
    InternalServiceException *shared.InternalServiceException 
    InvalidArnException *shared.InvalidArnException 
    LimitExceededException *shared.LimitExceededException 
    ResourceNotFoundException *shared.ResourceNotFoundException 
    RetryableConflictException *shared.RetryableConflictException 
    StatusCode int64 
    ValidationException *shared.ValidationException 
    
}

