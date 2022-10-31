package operations

import (
"openapi/pkg/models/shared")

type GetVaultItemByIDPathParams struct {
    ItemUUID string `pathParam:"style=simple,explode=false,name=itemUuid"`
    VaultUUID string `pathParam:"style=simple,explode=false,name=vaultUuid"`
    
}

type GetVaultItemByIDSecurity struct {
    ConnectToken shared.SchemeConnectToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetVaultItemByIDRequest struct {
    PathParams GetVaultItemByIDPathParams 
    Security GetVaultItemByIDSecurity 
    
}

type GetVaultItemByIDResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    FullItem *shared.FullItem 
    StatusCode int64 
    
}

