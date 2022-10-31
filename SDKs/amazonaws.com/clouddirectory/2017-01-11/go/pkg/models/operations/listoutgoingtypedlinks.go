package operations

import (
"openapi/pkg/models/shared")

type ListOutgoingTypedLinksHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzDataPartition string `header:"style=simple,explode=false,name=x-amz-data-partition"`
    
}


type ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum string

const (
    ListOutgoingTypedLinksRequestBodyConsistencyLevelEnumSerializable ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum = "SERIALIZABLE"
ListOutgoingTypedLinksRequestBodyConsistencyLevelEnumEventual ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum = "EVENTUAL"
)


type ListOutgoingTypedLinksRequestBodyFilterTypedLink struct {
    SchemaArn *string `json:"SchemaArn,omitempty"`
    TypedLinkName *string `json:"TypedLinkName,omitempty"`
    
}

type ListOutgoingTypedLinksRequestBodyObjectReference struct {
    Selector *string `json:"Selector,omitempty"`
    
}

type ListOutgoingTypedLinksRequestBody struct {
    ConsistencyLevel *ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum `json:"ConsistencyLevel,omitempty"`
    FilterAttributeRanges []shared.TypedLinkAttributeRange `json:"FilterAttributeRanges,omitempty"`
    FilterTypedLink *ListOutgoingTypedLinksRequestBodyFilterTypedLink `json:"FilterTypedLink,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ObjectReference ListOutgoingTypedLinksRequestBodyObjectReference `json:"ObjectReference"`
    
}

type ListOutgoingTypedLinksRequest struct {
    Headers ListOutgoingTypedLinksHeaders 
    Request ListOutgoingTypedLinksRequestBody `request:"mediaType=application/json"`
    
}

type ListOutgoingTypedLinksResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DirectoryNotEnabledException *interface{} 
    FacetValidationException *interface{} 
    InternalServiceException *interface{} 
    InvalidArnException *interface{} 
    InvalidNextTokenException *interface{} 
    LimitExceededException *interface{} 
    ListOutgoingTypedLinksResponse *shared.ListOutgoingTypedLinksResponse 
    ResourceNotFoundException *interface{} 
    RetryableConflictException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

