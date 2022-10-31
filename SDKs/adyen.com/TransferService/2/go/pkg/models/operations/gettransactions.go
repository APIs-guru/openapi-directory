package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetTransactionsQueryParams struct {
	AccountHolderID  *string    `queryParam:"style=form,explode=true,name=accountHolderId"`
	BalanceAccountID *string    `queryParam:"style=form,explode=true,name=balanceAccountId"`
	BalancePlatform  *string    `queryParam:"style=form,explode=true,name=balancePlatform"`
	CreatedSince     *time.Time `queryParam:"style=form,explode=true,name=createdSince"`
	CreatedUntil     *time.Time `queryParam:"style=form,explode=true,name=createdUntil"`
	Cursor           *string    `queryParam:"style=form,explode=true,name=cursor"`
	Limit            *int32     `queryParam:"style=form,explode=true,name=limit"`
}

type GetTransactionsSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetTransactionsRequest struct {
	QueryParams GetTransactionsQueryParams
	Security    GetTransactionsSecurity
}

type GetTransactionsResponse struct {
	ContentType               string
	RestServiceError          *interface{}
	StatusCode                int64
	TransactionSearchResponse *interface{}
}
