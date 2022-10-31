package operations

import (
"openapi/pkg/models/shared")

type PatchAppsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PatchAppsIDSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type PatchAppsIDRequest struct {
    PathParams PatchAppsIDPathParams 
    Request *shared.AppPatch `request:"mediaType=application/json"`
    Security PatchAppsIDSecurity 
    
}

type PatchAppsIDResponse struct {
    ContentType string 
    StatusCode int64 
    AppResponse *shared.AppResponse 
    Error *shared.Error 
    
}

