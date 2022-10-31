package operations

import (
"openapi/pkg/models/shared")

type ListIndexQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListIndexXAmzConsistencyLevelEnum string

const (
    ListIndexXAmzConsistencyLevelEnumSerializable ListIndexXAmzConsistencyLevelEnum = "SERIALIZABLE"
ListIndexXAmzConsistencyLevelEnumEventual ListIndexXAmzConsistencyLevelEnum = "EVENTUAL"
)


type ListIndexHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzConsistencyLevel *ListIndexXAmzConsistencyLevelEnum `header:"style=simple,explode=false,name=x-amz-consistency-level"`
    XAmzDataPartition string `header:"style=simple,explode=false,name=x-amz-data-partition"`
    
}

type ListIndexRequestBodyIndexReference struct {
    Selector *string `json:"Selector,omitempty"`
    
}

type ListIndexRequestBody struct {
    IndexReference ListIndexRequestBodyIndexReference `json:"IndexReference"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    RangesOnIndexedValues []shared.ObjectAttributeRange `json:"RangesOnIndexedValues,omitempty"`
    
}

type ListIndexRequest struct {
    QueryParams ListIndexQueryParams 
    Headers ListIndexHeaders 
    Request ListIndexRequestBody `request:"mediaType=application/json"`
    
}

type ListIndexResponse struct {
    AccessDeniedException *shared.AccessDeniedException 
    ContentType string 
    DirectoryNotEnabledException *shared.DirectoryNotEnabledException 
    FacetValidationException *shared.FacetValidationException 
    InternalServiceException *shared.InternalServiceException 
    InvalidArnException *shared.InvalidArnException 
    InvalidNextTokenException *shared.InvalidNextTokenException 
    LimitExceededException *shared.LimitExceededException 
    ListIndexResponse *shared.ListIndexResponse 
    NotIndexException *shared.NotIndexException 
    ResourceNotFoundException *shared.ResourceNotFoundException 
    RetryableConflictException *shared.RetryableConflictException 
    StatusCode int64 
    ValidationException *shared.ValidationException 
    
}

