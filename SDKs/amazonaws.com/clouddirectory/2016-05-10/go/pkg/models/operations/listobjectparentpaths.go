package operations

import (
"openapi/pkg/models/shared")

type ListObjectParentPathsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}

type ListObjectParentPathsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzDataPartition string `header:"style=simple,explode=false,name=x-amz-data-partition"`
    
}

type ListObjectParentPathsRequestBodyObjectReference struct {
    Selector *string `json:"Selector,omitempty"`
    
}

type ListObjectParentPathsRequestBody struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ObjectReference ListObjectParentPathsRequestBodyObjectReference `json:"ObjectReference"`
    
}

type ListObjectParentPathsRequest struct {
    QueryParams ListObjectParentPathsQueryParams 
    Headers ListObjectParentPathsHeaders 
    Request ListObjectParentPathsRequestBody `request:"mediaType=application/json"`
    
}

type ListObjectParentPathsResponse struct {
    AccessDeniedException *shared.AccessDeniedException 
    ContentType string 
    DirectoryNotEnabledException *shared.DirectoryNotEnabledException 
    InternalServiceException *shared.InternalServiceException 
    InvalidArnException *shared.InvalidArnException 
    InvalidNextTokenException *shared.InvalidNextTokenException 
    LimitExceededException *shared.LimitExceededException 
    ListObjectParentPathsResponse *shared.ListObjectParentPathsResponse 
    ResourceNotFoundException *shared.ResourceNotFoundException 
    RetryableConflictException *shared.RetryableConflictException 
    StatusCode int64 
    ValidationException *shared.ValidationException 
    
}

