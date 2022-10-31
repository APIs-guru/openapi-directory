package operations

import (
"openapi/pkg/models/shared")

type AgentsGetAgentsQueryParams struct {
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type AgentsGetAgentsRequest struct {
    QueryParams AgentsGetAgentsQueryParams 
    
}

type AgentsGetAgentsResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    APIPagedResponseBuildSystemSharedDtoAgent *shared.APIPagedResponseBuildSystemSharedDtoAgent 
    ContentType string 
    StatusCode int64 
    
}

