package operations

import (
"openapi/pkg/models/shared")

type UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsQueryParams struct {
    ClientID *string `queryParam:"style=form,explode=true,name=ClientID"`
    PackageTypeID *string `queryParam:"style=form,explode=true,name=PackageTypeID"`
    UpdateGroupID *string `queryParam:"style=form,explode=true,name=UpdateGroupID"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsRequest struct {
    QueryParams UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsQueryParams 
    
}

type UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    APIPagedResponseUpdateSystemModelsUpdateGroupSubscription *shared.APIPagedResponseUpdateSystemModelsUpdateGroupSubscription 
    ContentType string 
    StatusCode int64 
    
}

