package operations

import (
	"openapi/pkg/models/shared"
)

type GetDetailsOfFileByIDPathParams struct {
	FileUUID  string `pathParam:"style=simple,explode=false,name=fileUuid"`
	ItemUUID  string `pathParam:"style=simple,explode=false,name=itemUuid"`
	VaultUUID string `pathParam:"style=simple,explode=false,name=vaultUuid"`
}

type GetDetailsOfFileByIDQueryParams struct {
	InlineFiles *bool `queryParam:"style=form,explode=true,name=inline_files"`
}

type GetDetailsOfFileByIDSecurity struct {
	ConnectToken shared.SchemeConnectToken `security:"scheme,type=http,subtype=bearer"`
}

type GetDetailsOfFileByIDRequest struct {
	PathParams  GetDetailsOfFileByIDPathParams
	QueryParams GetDetailsOfFileByIDQueryParams
	Security    GetDetailsOfFileByIDSecurity
}

type GetDetailsOfFileByIDResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	File          *shared.File
	StatusCode    int64
}
