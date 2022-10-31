package operations

import (
"openapi/pkg/models/shared")

type PostAppsIDPkcs12PathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostAppsIDPkcs12Security struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type PostAppsIDPkcs12Request struct {
    PathParams PostAppsIDPkcs12PathParams 
    Request *shared.AppPkcs12 `request:"mediaType=multipart/form-data"`
    Security PostAppsIDPkcs12Security 
    
}

type PostAppsIDPkcs12Response struct {
    ContentType string 
    StatusCode int64 
    AppResponse *shared.AppResponse 
    Error *shared.Error 
    
}

