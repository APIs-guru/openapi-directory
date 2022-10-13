package operations

import (
	"openapi/pkg/models/shared"
)

type GetTransactionsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetTransactionsIDSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetTransactionsIDRequest struct {
	PathParams GetTransactionsIDPathParams
	Security   GetTransactionsIDSecurity
}

type GetTransactionsIDResponse struct {
	ContentType      string
	RestServiceError *interface{}
	StatusCode       int64
	Transaction      *interface{}
}
