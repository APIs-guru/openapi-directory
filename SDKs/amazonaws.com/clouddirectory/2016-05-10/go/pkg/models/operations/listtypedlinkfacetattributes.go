package operations

import (
"openapi/pkg/models/shared")

type ListTypedLinkFacetAttributesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}

type ListTypedLinkFacetAttributesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzDataPartition string `header:"style=simple,explode=false,name=x-amz-data-partition"`
    
}

type ListTypedLinkFacetAttributesRequestBody struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    Name string `json:"Name"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

type ListTypedLinkFacetAttributesRequest struct {
    QueryParams ListTypedLinkFacetAttributesQueryParams 
    Headers ListTypedLinkFacetAttributesHeaders 
    Request ListTypedLinkFacetAttributesRequestBody `request:"mediaType=application/json"`
    
}

type ListTypedLinkFacetAttributesResponse struct {
    AccessDeniedException *shared.AccessDeniedException 
    ContentType string 
    FacetNotFoundException *shared.FacetNotFoundException 
    InternalServiceException *shared.InternalServiceException 
    InvalidArnException *shared.InvalidArnException 
    InvalidNextTokenException *shared.InvalidNextTokenException 
    LimitExceededException *shared.LimitExceededException 
    ListTypedLinkFacetAttributesResponse *shared.ListTypedLinkFacetAttributesResponse 
    ResourceNotFoundException *shared.ResourceNotFoundException 
    RetryableConflictException *shared.RetryableConflictException 
    StatusCode int64 
    ValidationException *shared.ValidationException 
    
}

