package operations

import (
"openapi/pkg/models/shared")


type ListComponentsScopeEnum string

const (
    ListComponentsScopeEnumPrivate ListComponentsScopeEnum = "PRIVATE"
ListComponentsScopeEnumPublic ListComponentsScopeEnum = "PUBLIC"
)


type ListComponentsQueryParams struct {
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    Scope *ListComponentsScopeEnum `queryParam:"style=form,explode=true,name=scope"`
    
}

type ListComponentsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListComponentsRequest struct {
    QueryParams ListComponentsQueryParams 
    Headers ListComponentsHeaders 
    
}

type ListComponentsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ListComponentsResponse *shared.ListComponentsResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

