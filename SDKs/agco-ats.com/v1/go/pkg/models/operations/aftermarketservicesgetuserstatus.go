package operations

import (
	"openapi/pkg/models/shared"
)

type AftermarketServicesGetUserStatusQueryParams struct {
	DealerCode  string `queryParam:"style=form,explode=true,name=dealerCode"`
	VoucherCode string `queryParam:"style=form,explode=true,name=voucherCode"`
}

type AftermarketServicesGetUserStatusRequest struct {
	QueryParams AftermarketServicesGetUserStatusQueryParams
}

type AftermarketServicesGetUserStatusResponse struct {
	AgcoPowerServicesModelsUserStatus *shared.AgcoPowerServicesModelsUserStatus
	APIModelsAPIError                 *shared.APIModelsAPIError
	Body                              []byte
	ContentType                       string
	StatusCode                        int64
}
