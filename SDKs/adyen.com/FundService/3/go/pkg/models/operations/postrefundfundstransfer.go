package operations

import (
	"openapi/pkg/models/shared"
)

type PostRefundFundsTransferSecurityOption1 struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type PostRefundFundsTransferSecurityOption2 struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostRefundFundsTransferSecurity struct {
	Option1 *PostRefundFundsTransferSecurityOption1 `security:"option"`
	Option2 *PostRefundFundsTransferSecurityOption2 `security:"option"`
}

type PostRefundFundsTransferRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostRefundFundsTransferSecurity
}

type PostRefundFundsTransferResponse struct {
	ContentType                 string
	RefundFundsTransferResponse *interface{}
	ServiceError                *interface{}
	StatusCode                  int64
}
