package operations

import (
	"openapi/pkg/models/shared"
)

type VouchersPostRequests struct {
	ApplicationXML         []byte                        `request:"mediaType=application/xml"`
	DealerDbModelsVoucher  *shared.DealerDbModelsVoucher `request:"mediaType=application/json"`
	DealerDbModelsVoucher1 *shared.DealerDbModelsVoucher `request:"mediaType=application/x-www-form-urlencoded"`
	DealerDbModelsVoucher2 *shared.DealerDbModelsVoucher `request:"mediaType=text/json"`
	TextXML                []byte                        `request:"mediaType=text/xml"`
}

type VouchersPostRequest struct {
	Request VouchersPostRequests
}

type VouchersPostResponse struct {
	Body                                 []byte
	ContentType                          string
	StatusCode                           int64
	VouchersPost200ApplicationJSONString *string
	VouchersPost200TextJSONString        *string
}
