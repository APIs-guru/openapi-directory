package operations

import (
	"openapi/pkg/models/shared"
)

type PostRefundNotPaidOutTransfersSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostRefundNotPaidOutTransfersRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostRefundNotPaidOutTransfersSecurity
}

type PostRefundNotPaidOutTransfersResponse struct {
	ContentType                       string
	RefundNotPaidOutTransfersResponse *interface{}
	ServiceError                      *interface{}
	StatusCode                        int64
}
