package operations

import (
"openapi/pkg/models/shared")

type ListContainerRecipesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListContainerRecipesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type ListContainerRecipesRequestBodyOwnerEnum string

const (
    ListContainerRecipesRequestBodyOwnerEnumSelf ListContainerRecipesRequestBodyOwnerEnum = "Self"
ListContainerRecipesRequestBodyOwnerEnumShared ListContainerRecipesRequestBodyOwnerEnum = "Shared"
ListContainerRecipesRequestBodyOwnerEnumAmazon ListContainerRecipesRequestBodyOwnerEnum = "Amazon"
)


type ListContainerRecipesRequestBody struct {
    Filters []shared.Filter `json:"filters,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    Owner *ListContainerRecipesRequestBodyOwnerEnum `json:"owner,omitempty"`
    
}

type ListContainerRecipesRequest struct {
    QueryParams ListContainerRecipesQueryParams 
    Headers ListContainerRecipesHeaders 
    Request ListContainerRecipesRequestBody `request:"mediaType=application/json"`
    
}

type ListContainerRecipesResponse struct {
    CallRateLimitExceededException *interface{} 
    ClientException *interface{} 
    ContentType string 
    ForbiddenException *interface{} 
    InvalidPaginationTokenException *interface{} 
    InvalidRequestException *interface{} 
    ListContainerRecipesResponse *shared.ListContainerRecipesResponse 
    ServiceException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

