package operations

import (
"openapi/pkg/models/shared")

type BundlesGetBundlesQueryParams struct {
    Active *bool `queryParam:"style=form,explode=true,name=Active"`
    UpdateGroupID *string `queryParam:"style=form,explode=true,name=UpdateGroupID"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type BundlesGetBundlesRequest struct {
    QueryParams BundlesGetBundlesQueryParams 
    
}

type BundlesGetBundlesResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    APIPagedResponseUpdateSystemModelsBundle *shared.APIPagedResponseUpdateSystemModelsBundle 
    ContentType string 
    StatusCode int64 
    
}

