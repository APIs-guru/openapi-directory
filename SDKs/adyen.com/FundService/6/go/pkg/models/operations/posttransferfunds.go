package operations

import (
	"openapi/pkg/models/shared"
)

type PostTransferFundsSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostTransferFundsRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostTransferFundsSecurity
}

type PostTransferFundsResponse struct {
	ContentType           string
	ServiceError          *interface{}
	StatusCode            int64
	TransferFundsResponse *interface{}
}
