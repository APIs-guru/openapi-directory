package operations

import (
"openapi/pkg/models/shared")

type GetRoutesPathParams struct {
    APIID string `pathParam:"style=simple,explode=false,name=apiId"`
    
}

type GetRoutesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type GetRoutesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetRoutesRequest struct {
    PathParams GetRoutesPathParams 
    QueryParams GetRoutesQueryParams 
    Headers GetRoutesHeaders 
    
}

type GetRoutesResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    GetRoutesResponse *shared.GetRoutesResponse 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

