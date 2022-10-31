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
    AccessDeniedException *interface{} 
    ContentType string 
    DirectoryNotEnabledException *interface{} 
    FacetValidationException *interface{} 
    GetLinkAttributesResponse *shared.GetLinkAttributesResponse 
    InternalServiceException *interface{} 
    InvalidArnException *interface{} 
    LimitExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    RetryableConflictException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

