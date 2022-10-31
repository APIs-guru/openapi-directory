package operations

import (
"openapi/pkg/models/shared")

type JobsGetJobPathParams struct {
    JobID int32 `pathParam:"style=simple,explode=false,name=jobID"`
    
}

type JobsGetJobQueryParams struct {
    IsIncludeDeleted *bool `queryParam:"style=form,explode=true,name=isIncludeDeleted"`
    
}

type JobsGetJobRequest struct {
    PathParams JobsGetJobPathParams 
    QueryParams JobsGetJobQueryParams 
    
}

type JobsGetJobResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    BuildSystemSharedDtoJob *shared.BuildSystemSharedDtoJob 
    ContentType string 
    StatusCode int64 
    
}

