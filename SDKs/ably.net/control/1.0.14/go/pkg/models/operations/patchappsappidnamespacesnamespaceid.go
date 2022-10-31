package operations

import (
"openapi/pkg/models/shared")

type PatchAppsAppIDNamespacesNamespaceIDPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=app_id"`
    NamespaceID string `pathParam:"style=simple,explode=false,name=namespace_id"`
    
}

type PatchAppsAppIDNamespacesNamespaceIDSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type PatchAppsAppIDNamespacesNamespaceIDRequest struct {
    PathParams PatchAppsAppIDNamespacesNamespaceIDPathParams 
    Request *shared.NamespacePatch `request:"mediaType=application/json"`
    Security PatchAppsAppIDNamespacesNamespaceIDSecurity 
    
}

type PatchAppsAppIDNamespacesNamespaceIDResponse struct {
    ContentType string 
    StatusCode int64 
    Error *shared.Error 
    NamespaceResponse *shared.NamespaceResponse 
    
}

