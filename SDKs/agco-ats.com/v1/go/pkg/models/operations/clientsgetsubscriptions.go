package operations

import (
"openapi/pkg/models/shared")

type ClientsGetSubscriptionsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=ID"`
    
}

type ClientsGetSubscriptionsQueryParams struct {
    UpdateGroupID *string `queryParam:"style=form,explode=true,name=UpdateGroupID"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type ClientsGetSubscriptionsRequest struct {
    PathParams ClientsGetSubscriptionsPathParams 
    QueryParams ClientsGetSubscriptionsQueryParams 
    
}

type ClientsGetSubscriptionsResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    APIPagedResponseUpdateSystemModelsUpdateGroupSubscription *shared.APIPagedResponseUpdateSystemModelsUpdateGroupSubscription 
    ContentType string 
    StatusCode int64 
    
}

