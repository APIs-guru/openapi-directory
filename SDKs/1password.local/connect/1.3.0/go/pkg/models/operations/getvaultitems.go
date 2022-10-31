package operations

import (
	"openapi/pkg/models/shared"
)

type GetVaultItemsPathParams struct {
	VaultUUID string `pathParam:"style=simple,explode=false,name=vaultUuid"`
}

type GetVaultItemsQueryParams struct {
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
}

type GetVaultItemsSecurity struct {
	ConnectToken shared.SchemeConnectToken `security:"scheme,type=http,subtype=bearer"`
}

type GetVaultItemsRequest struct {
	PathParams  GetVaultItemsPathParams
	QueryParams GetVaultItemsQueryParams
	Security    GetVaultItemsSecurity
}

type GetVaultItemsResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	Items         []shared.Item
	StatusCode    int64
}
