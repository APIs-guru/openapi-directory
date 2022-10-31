package operations

import (
"openapi/pkg/models/shared")

type GetDeploymentsPathParams struct {
    APIID string `pathParam:"style=simple,explode=false,name=apiId"`
    
}

type GetDeploymentsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type GetDeploymentsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeploymentsRequest struct {
    PathParams GetDeploymentsPathParams 
    QueryParams GetDeploymentsQueryParams 
    Headers GetDeploymentsHeaders 
    
}

type GetDeploymentsResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    GetDeploymentsResponse *shared.GetDeploymentsResponse 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

