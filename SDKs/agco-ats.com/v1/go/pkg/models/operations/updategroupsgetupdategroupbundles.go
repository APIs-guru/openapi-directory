package operations

import (
"openapi/pkg/models/shared")

type UpdateGroupsGetUpdateGroupBundlesPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=ID"`
    
}

type UpdateGroupsGetUpdateGroupBundlesQueryParams struct {
    IncludeInactive bool `queryParam:"style=form,explode=true,name=IncludeInactive"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type UpdateGroupsGetUpdateGroupBundlesRequest struct {
    PathParams UpdateGroupsGetUpdateGroupBundlesPathParams 
    QueryParams UpdateGroupsGetUpdateGroupBundlesQueryParams 
    
}

type UpdateGroupsGetUpdateGroupBundlesResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    APIPagedResponseUpdateSystemModelsBundle *shared.APIPagedResponseUpdateSystemModelsBundle 
    ContentType string 
    StatusCode int64 
    
}

