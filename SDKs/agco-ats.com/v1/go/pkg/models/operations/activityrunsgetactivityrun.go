package operations

import (
"openapi/pkg/models/shared")

type ActivityRunsGetActivityRunPathParams struct {
    ActivityRunID int32 `pathParam:"style=simple,explode=false,name=activityRunID"`
    
}

type ActivityRunsGetActivityRunRequest struct {
    PathParams ActivityRunsGetActivityRunPathParams 
    
}

type ActivityRunsGetActivityRunResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    BuildSystemSharedDtoActivityRun *shared.BuildSystemSharedDtoActivityRun 
    ContentType string 
    StatusCode int64 
    
}

