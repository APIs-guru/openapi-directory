package operations

import (
"openapi/pkg/models/shared")

type ListEventTypesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}

type ListEventTypesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListEventTypesRequestBody struct {
    Filters []shared.ListEventTypesFilter `json:"Filters,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

type ListEventTypesRequest struct {
    QueryParams ListEventTypesQueryParams 
    Headers ListEventTypesHeaders 
    Request ListEventTypesRequestBody `request:"mediaType=application/json"`
    
}

type ListEventTypesResponse struct {
    ContentType string 
    InvalidNextTokenException *interface{} 
    ListEventTypesResult *shared.ListEventTypesResult 
    StatusCode int64 
    ValidationException *interface{} 
    
}

