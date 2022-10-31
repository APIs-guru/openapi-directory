package operations

import (
"openapi/pkg/models/shared")

type GetIntegrationResponsesPathParams struct {
    APIID string `pathParam:"style=simple,explode=false,name=apiId"`
    IntegrationID string `pathParam:"style=simple,explode=false,name=integrationId"`
    
}

type GetIntegrationResponsesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type GetIntegrationResponsesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetIntegrationResponsesRequest struct {
    PathParams GetIntegrationResponsesPathParams 
    QueryParams GetIntegrationResponsesQueryParams 
    Headers GetIntegrationResponsesHeaders 
    
}

type GetIntegrationResponsesResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    GetIntegrationResponsesResponse *shared.GetIntegrationResponsesResponse 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

