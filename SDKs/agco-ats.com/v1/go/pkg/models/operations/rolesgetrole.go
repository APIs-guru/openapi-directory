package operations

import (
"openapi/pkg/models/shared")

type RolesGetRolePathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type RolesGetRoleRequest struct {
    PathParams RolesGetRolePathParams 
    
}

type RolesGetRoleResponse struct {
    APIModelsRole *shared.APIModelsRole 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

