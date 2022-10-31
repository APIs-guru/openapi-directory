package operations

import (
"openapi/pkg/models/shared")

type GetModelsPathParams struct {
    APIID string `pathParam:"style=simple,explode=false,name=apiId"`
    
}

type GetModelsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type GetModelsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetModelsRequest struct {
    PathParams GetModelsPathParams 
    QueryParams GetModelsQueryParams 
    Headers GetModelsHeaders 
    
}

type GetModelsResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    GetModelsResponse *shared.GetModelsResponse 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

