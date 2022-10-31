package operations

import (
"openapi/pkg/models/shared")

type GetItemFilesPathParams struct {
    ItemUUID string `pathParam:"style=simple,explode=false,name=itemUuid"`
    VaultUUID string `pathParam:"style=simple,explode=false,name=vaultUuid"`
    
}

type GetItemFilesQueryParams struct {
    InlineFiles *bool `queryParam:"style=form,explode=true,name=inline_files"`
    
}

type GetItemFilesSecurity struct {
    ConnectToken shared.SchemeConnectToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetItemFilesRequest struct {
    PathParams GetItemFilesPathParams 
    QueryParams GetItemFilesQueryParams 
    Security GetItemFilesSecurity 
    
}

type GetItemFilesResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    Files []shared.File 
    StatusCode int64 
    
}

