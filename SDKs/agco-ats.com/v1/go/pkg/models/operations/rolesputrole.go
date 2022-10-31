package operations

import (
"openapi/pkg/models/shared")

type RolesPutRolePathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type RolesPutRoleRequests struct {
    APIModelsRole *shared.APIModelsRole `request:"mediaType=application/json"`
    APIModelsRole1 *shared.APIModelsRole `request:"mediaType=application/x-www-form-urlencoded"`
    APIModelsRole2 *shared.APIModelsRole `request:"mediaType=text/json"`
    ApplicationXML []byte `request:"mediaType=application/xml"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type RolesPutRoleRequest struct {
    PathParams RolesPutRolePathParams 
    Request RolesPutRoleRequests 
    
}

type RolesPutRoleResponse struct {
    ContentType string 
    StatusCode int64 
    
}

