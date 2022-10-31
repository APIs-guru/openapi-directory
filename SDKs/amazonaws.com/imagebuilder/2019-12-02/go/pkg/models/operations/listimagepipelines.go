package operations

import (
"openapi/pkg/models/shared")

type ListImagePipelinesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListImagePipelinesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListImagePipelinesRequestBody struct {
    Filters []shared.Filter `json:"filters,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

type ListImagePipelinesRequest struct {
    QueryParams ListImagePipelinesQueryParams 
    Headers ListImagePipelinesHeaders 
    Request ListImagePipelinesRequestBody `request:"mediaType=application/json"`
    
}

type ListImagePipelinesResponse struct {
    CallRateLimitExceededException *interface{} 
    ClientException *interface{} 
    ContentType string 
    ForbiddenException *interface{} 
    InvalidPaginationTokenException *interface{} 
    InvalidRequestException *interface{} 
    ListImagePipelinesResponse *shared.ListImagePipelinesResponse 
    ServiceException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

