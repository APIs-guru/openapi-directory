package operations

import (
	"openapi/pkg/models/shared"
)

type GetVaultByIDPathParams struct {
	VaultUUID string `pathParam:"style=simple,explode=false,name=vaultUuid"`
}

type GetVaultByIDSecurity struct {
	ConnectToken shared.SchemeConnectToken `security:"scheme,type=http,subtype=bearer"`
}

type GetVaultByIDRequest struct {
	PathParams GetVaultByIDPathParams
	Security   GetVaultByIDSecurity
}

type GetVaultByIDResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
	Vault         *shared.Vault
}
