package operations

import (
"openapi/pkg/models/shared")

type ListWebhooksPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=appId"`
    
}

type ListWebhooksQueryParams struct {
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListWebhooksHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListWebhooksRequest struct {
    PathParams ListWebhooksPathParams 
    QueryParams ListWebhooksQueryParams 
    Headers ListWebhooksHeaders 
    
}

type ListWebhooksResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    ListWebhooksResult *shared.ListWebhooksResult 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

