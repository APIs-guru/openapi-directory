package operations

import (
	"openapi/pkg/models/shared"
)

type PostRefundFundsTransferSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
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
