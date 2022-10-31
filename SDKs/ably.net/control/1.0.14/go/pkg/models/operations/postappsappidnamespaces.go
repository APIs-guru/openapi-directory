package operations

import (
"openapi/pkg/models/shared")

type PostAppsAppIDNamespacesPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=app_id"`
    
}

type PostAppsAppIDNamespacesSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type PostAppsAppIDNamespacesRequest struct {
    PathParams PostAppsAppIDNamespacesPathParams 
    Request *shared.NamespacePost `request:"mediaType=application/json"`
    Security PostAppsAppIDNamespacesSecurity 
    
}

type PostAppsAppIDNamespacesResponse struct {
    ContentType string 
    StatusCode int64 
    Error *shared.Error 
    NamespaceResponse *shared.NamespaceResponse 
    
}

