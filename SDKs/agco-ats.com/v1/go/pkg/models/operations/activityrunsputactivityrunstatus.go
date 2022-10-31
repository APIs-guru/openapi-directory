package operations

import (
"openapi/pkg/models/shared")

type ActivityRunsPutActivityRunStatusPathParams struct {
    ActivityRunID int32 `pathParam:"style=simple,explode=false,name=activityRunID"`
    
}

type ActivityRunsPutActivityRunStatusRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    BuildSystemSharedDtoActivityRunStatus *shared.BuildSystemSharedDtoActivityRunStatus `request:"mediaType=application/json"`
    BuildSystemSharedDtoActivityRunStatus1 *shared.BuildSystemSharedDtoActivityRunStatus `request:"mediaType=application/x-www-form-urlencoded"`
    BuildSystemSharedDtoActivityRunStatus2 *shared.BuildSystemSharedDtoActivityRunStatus `request:"mediaType=text/json"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type ActivityRunsPutActivityRunStatusRequest struct {
    PathParams ActivityRunsPutActivityRunStatusPathParams 
    Request ActivityRunsPutActivityRunStatusRequests 
    
}

type ActivityRunsPutActivityRunStatusResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

