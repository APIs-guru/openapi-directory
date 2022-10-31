package operations

import (
"openapi/pkg/models/shared")

type GetAppsAppIDKeysPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=app_id"`
    
}

type GetAppsAppIDKeysSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type GetAppsAppIDKeysRequest struct {
    PathParams GetAppsAppIDKeysPathParams 
    Security GetAppsAppIDKeysSecurity 
    
}

type GetAppsAppIDKeysResponse struct {
    ContentType string 
    StatusCode int64 
    Error *shared.Error 
    KeyResponses []shared.KeyResponse 
    
}

