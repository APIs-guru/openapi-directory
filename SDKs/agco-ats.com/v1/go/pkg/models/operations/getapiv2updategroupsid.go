package operations

import (
"openapi/pkg/models/shared")

type GetAPIV2UpdateGroupsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=ID"`
    
}

type GetAPIV2UpdateGroupsIDRequest struct {
    PathParams GetAPIV2UpdateGroupsIDPathParams 
    
}

type GetAPIV2UpdateGroupsIDResponse struct {
    APIModelsAPIError *shared.APIModelsAPIError 
    Body []byte 
    ContentType string 
    StatusCode int64 
    UpdateSystemModelsUpdateGroup *shared.UpdateSystemModelsUpdateGroup 
    
}

