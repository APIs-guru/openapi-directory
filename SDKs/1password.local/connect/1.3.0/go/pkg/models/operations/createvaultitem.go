package operations

import (
"openapi/pkg/models/shared")

type CreateVaultItemPathParams struct {
    VaultUUID string `pathParam:"style=simple,explode=false,name=vaultUuid"`
    
}

type CreateVaultItemSecurity struct {
    ConnectToken shared.SchemeConnectToken `security:"scheme,type=http,subtype=bearer"`
    
}

type CreateVaultItemRequest struct {
    PathParams CreateVaultItemPathParams 
    Request *shared.FullItem `request:"mediaType=application/json"`
    Security CreateVaultItemSecurity 
    
}

type CreateVaultItemResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    FullItem *shared.FullItem 
    StatusCode int64 
    
}

