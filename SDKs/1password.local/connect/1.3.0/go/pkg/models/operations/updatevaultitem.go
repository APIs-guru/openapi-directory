package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateVaultItemPathParams struct {
	ItemUUID  string `pathParam:"style=simple,explode=false,name=itemUuid"`
	VaultUUID string `pathParam:"style=simple,explode=false,name=vaultUuid"`
}

type UpdateVaultItemSecurity struct {
	ConnectToken shared.SchemeConnectToken `security:"scheme,type=http,subtype=bearer"`
}

type UpdateVaultItemRequest struct {
	PathParams UpdateVaultItemPathParams
	Request    *shared.FullItemInput `request:"mediaType=application/json"`
	Security   UpdateVaultItemSecurity
}

type UpdateVaultItemResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	FullItem      *shared.FullItem
	StatusCode    int64
}
