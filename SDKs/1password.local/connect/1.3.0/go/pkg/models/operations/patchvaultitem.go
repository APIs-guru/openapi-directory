package operations

import (
	"openapi/pkg/models/shared"
)

type PatchVaultItemPathParams struct {
	ItemUUID  string `pathParam:"style=simple,explode=false,name=itemUuid"`
	VaultUUID string `pathParam:"style=simple,explode=false,name=vaultUuid"`
}

type PatchVaultItemSecurity struct {
	ConnectToken shared.SchemeConnectToken `security:"scheme,type=http,subtype=bearer"`
}

type PatchVaultItemRequest struct {
	PathParams PatchVaultItemPathParams
	Request    []shared.Patch `request:"mediaType=application/json"`
	Security   PatchVaultItemSecurity
}

type PatchVaultItemResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	FullItem      *shared.FullItem
	StatusCode    int64
}
