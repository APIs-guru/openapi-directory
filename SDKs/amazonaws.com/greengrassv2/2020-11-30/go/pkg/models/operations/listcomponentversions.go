package operations

import (
"openapi/pkg/models/shared")

type ListComponentVersionsPathParams struct {
    Arn string `pathParam:"style=simple,explode=false,name=arn"`
    
}

type ListComponentVersionsQueryParams struct {
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListComponentVersionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListComponentVersionsRequest struct {
    PathParams ListComponentVersionsPathParams 
    QueryParams ListComponentVersionsQueryParams 
    Headers ListComponentVersionsHeaders 
    
}

type ListComponentVersionsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ListComponentVersionsResponse *shared.ListComponentVersionsResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

