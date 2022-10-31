package operations

import (
"openapi/pkg/models/shared")

type ReportingGetSubscriptionsQueryParams struct {
    ClientID *string `queryParam:"style=form,explode=true,name=ClientID"`
    UpdateGroupID *string `queryParam:"style=form,explode=true,name=UpdateGroupID"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type ReportingGetSubscriptionsRequest struct {
    QueryParams ReportingGetSubscriptionsQueryParams 
    
}

type ReportingGetSubscriptionsResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationship *shared.APIPagedResponseUpdateSystemModelsUpdateGroupClientRelationship 
    ContentType string 
    StatusCode int64 
    
}

