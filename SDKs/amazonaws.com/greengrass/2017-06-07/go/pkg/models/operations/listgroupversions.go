package operations

import (
"openapi/pkg/models/shared")

type ListGroupVersionsPathParams struct {
    GroupID string `pathParam:"style=simple,explode=false,name=GroupId"`
    
}

type ListGroupVersionsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}

type ListGroupVersionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListGroupVersionsRequest struct {
    PathParams ListGroupVersionsPathParams 
    QueryParams ListGroupVersionsQueryParams 
    Headers ListGroupVersionsHeaders 
    
}

type ListGroupVersionsResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    ListGroupVersionsResponse *shared.ListGroupVersionsResponse 
    StatusCode int64 
    
}

