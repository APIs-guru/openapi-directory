package operations

import (
"openapi/pkg/models/shared")

type PermissionsPutPermissionPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PermissionsPutPermissionRequests struct {
    APIModelsPermission *shared.APIModelsPermission `request:"mediaType=application/json"`
    APIModelsPermission1 *shared.APIModelsPermission `request:"mediaType=application/x-www-form-urlencoded"`
    APIModelsPermission2 *shared.APIModelsPermission `request:"mediaType=text/json"`
    ApplicationXML []byte `request:"mediaType=application/xml"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type PermissionsPutPermissionRequest struct {
    PathParams PermissionsPutPermissionPathParams 
    Request PermissionsPutPermissionRequests 
    
}

type PermissionsPutPermissionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

