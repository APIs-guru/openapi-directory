package operations

import (
"openapi/pkg/models/shared")

type PostAppsAppIDKeysKeyIDRevokePathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=app_id"`
    KeyID string `pathParam:"style=simple,explode=false,name=key_id"`
    
}

type PostAppsAppIDKeysKeyIDRevokeSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type PostAppsAppIDKeysKeyIDRevokeRequest struct {
    PathParams PostAppsAppIDKeysKeyIDRevokePathParams 
    Security PostAppsAppIDKeysKeyIDRevokeSecurity 
    
}

type PostAppsAppIDKeysKeyIDRevokeResponse struct {
    ContentType string 
    StatusCode int64 
    Error *shared.Error 
    
}

