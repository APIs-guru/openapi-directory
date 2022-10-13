package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIActivityQueryParams struct {
	Limit  *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
}

type GetAPIActivitySecurity struct {
	ConnectToken shared.SchemeConnectToken `security:"scheme,type=http,subtype=bearer"`
}

type GetAPIActivityRequest struct {
	QueryParams GetAPIActivityQueryParams
	Security    GetAPIActivitySecurity
}

type GetAPIActivityResponse struct {
	APIRequests   []shared.APIRequest
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	Headers       map[string][]string
	StatusCode    int64
}
