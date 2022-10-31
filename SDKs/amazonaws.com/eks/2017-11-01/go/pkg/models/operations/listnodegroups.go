package operations

import (
"openapi/pkg/models/shared")

type ListNodegroupsPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type ListNodegroupsQueryParams struct {
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListNodegroupsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListNodegroupsRequest struct {
    PathParams ListNodegroupsPathParams 
    QueryParams ListNodegroupsQueryParams 
    Headers ListNodegroupsHeaders 
    
}

type ListNodegroupsResponse struct {
    ClientException *interface{} 
    ContentType string 
    InvalidParameterException *interface{} 
    ListNodegroupsResponse *shared.ListNodegroupsResponse 
    ResourceNotFoundException *interface{} 
    ServerException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

