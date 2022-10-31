package operations

import (
"openapi/pkg/models/shared")

type ListDataSourcesPathParams struct {
    APIID string `pathParam:"style=simple,explode=false,name=apiId"`
    
}

type ListDataSourcesQueryParams struct {
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListDataSourcesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListDataSourcesRequest struct {
    PathParams ListDataSourcesPathParams 
    QueryParams ListDataSourcesQueryParams 
    Headers ListDataSourcesHeaders 
    
}

type ListDataSourcesResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    ListDataSourcesResponse *shared.ListDataSourcesResponse 
    NotFoundException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

