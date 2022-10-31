package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVaultItemPathParams struct {
	ItemUUID  string `pathParam:"style=simple,explode=false,name=itemUuid"`
	VaultUUID string `pathParam:"style=simple,explode=false,name=vaultUuid"`
}

type DeleteVaultItemSecurity struct {
	ConnectToken shared.SchemeConnectToken `security:"scheme,type=http,subtype=bearer"`
}

type DeleteVaultItemRequest struct {
	PathParams DeleteVaultItemPathParams
	Security   DeleteVaultItemSecurity
}

type DeleteVaultItemResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
