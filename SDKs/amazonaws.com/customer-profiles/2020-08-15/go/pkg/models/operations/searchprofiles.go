package operations

import (
"openapi/pkg/models/shared")

type SearchProfilesPathParams struct {
    DomainName string `pathParam:"style=simple,explode=false,name=DomainName"`
    
}

type SearchProfilesQueryParams struct {
    MaxResults *int64 `queryParam:"style=form,explode=true,name=max-results"`
    NextToken *string `queryParam:"style=form,explode=true,name=next-token"`
    
}

type SearchProfilesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type SearchProfilesRequestBody struct {
    KeyName string `json:"KeyName"`
    Values []string `json:"Values"`
    
}

type SearchProfilesRequest struct {
    PathParams SearchProfilesPathParams 
    QueryParams SearchProfilesQueryParams 
    Headers SearchProfilesHeaders 
    Request SearchProfilesRequestBody `request:"mediaType=application/json"`
    
}

type SearchProfilesResponse struct {
    AccessDeniedException *interface{} 
    BadRequestException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    SearchProfilesResponse *shared.SearchProfilesResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

