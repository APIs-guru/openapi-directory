package operations

import (
"openapi/pkg/models/shared")

type GetVaultsQueryParams struct {
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    
}

type GetVaultsSecurity struct {
    ConnectToken shared.SchemeConnectToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetVaultsRequest struct {
    QueryParams GetVaultsQueryParams 
    Security GetVaultsSecurity 
    
}

type GetVaultsResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    Vaults []shared.Vault 
    
}

