package operations

import (
"openapi/pkg/models/shared")

type JobRunsGetJobRunsQueryParams struct {
    IncludeActivityRunDetails *bool `queryParam:"style=form,explode=true,name=includeActivityRunDetails"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    
}

type JobRunsGetJobRunsRequest struct {
    QueryParams JobRunsGetJobRunsQueryParams 
    
}

type JobRunsGetJobRunsResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    APIPagedResponseBuildSystemSharedDtoJobRun *shared.APIPagedResponseBuildSystemSharedDtoJobRun 
    ContentType string 
    StatusCode int64 
    
}

