package operations

import (
"openapi/pkg/models/shared")

type ListFlowsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListFlowsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListFlowsRequestBody struct {
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

type ListFlowsRequest struct {
    QueryParams ListFlowsQueryParams 
    Headers ListFlowsHeaders 
    Request ListFlowsRequestBody `request:"mediaType=application/json"`
    
}

type ListFlowsResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    ListFlowsResponse *shared.ListFlowsResponse 
    StatusCode int64 
    ValidationException *interface{} 
    
}

