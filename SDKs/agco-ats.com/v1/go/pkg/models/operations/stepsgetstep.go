package operations

import (
"openapi/pkg/models/shared")

type StepsGetStepPathParams struct {
    StepID int32 `pathParam:"style=simple,explode=false,name=stepID"`
    
}

type StepsGetStepQueryParams struct {
    IsIncludeDeleted *bool `queryParam:"style=form,explode=true,name=isIncludeDeleted"`
    
}

type StepsGetStepRequest struct {
    PathParams StepsGetStepPathParams 
    QueryParams StepsGetStepQueryParams 
    
}

type StepsGetStepResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    BuildSystemSharedDtoStep *shared.BuildSystemSharedDtoStep 
    ContentType string 
    StatusCode int64 
    
}

