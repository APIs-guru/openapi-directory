package operations

import (
"openapi/pkg/models/shared")

type ClientsGetAvailableSubscriptionsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=ID"`
    
}

type ClientsGetAvailableSubscriptionsQueryParams struct {
    UpdateGroupID *string `queryParam:"style=form,explode=true,name=UpdateGroupID"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type ClientsGetAvailableSubscriptionsRequest struct {
    PathParams ClientsGetAvailableSubscriptionsPathParams 
    QueryParams ClientsGetAvailableSubscriptionsQueryParams 
    
}

type ClientsGetAvailableSubscriptionsResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    APIPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription *shared.APIPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription 
    ContentType string 
    StatusCode int64 
    
}

