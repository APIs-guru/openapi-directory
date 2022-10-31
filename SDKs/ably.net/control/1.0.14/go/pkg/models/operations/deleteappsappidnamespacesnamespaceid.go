package operations

import (
"openapi/pkg/models/shared")

type DeleteAppsAppIDNamespacesNamespaceIDPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=app_id"`
    NamespaceID string `pathParam:"style=simple,explode=false,name=namespace_id"`
    
}

type DeleteAppsAppIDNamespacesNamespaceIDSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type DeleteAppsAppIDNamespacesNamespaceIDRequest struct {
    PathParams DeleteAppsAppIDNamespacesNamespaceIDPathParams 
    Security DeleteAppsAppIDNamespacesNamespaceIDSecurity 
    
}

type DeleteAppsAppIDNamespacesNamespaceIDResponse struct {
    ContentType string 
    StatusCode int64 
    Error *shared.Error 
    
}

