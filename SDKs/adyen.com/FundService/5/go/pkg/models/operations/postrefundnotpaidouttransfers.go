package operations

import (
	"openapi/pkg/models/shared"
)

type PostRefundNotPaidOutTransfersSecurityOption1 struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type PostRefundNotPaidOutTransfersSecurityOption2 struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostRefundNotPaidOutTransfersSecurity struct {
	Option1 *PostRefundNotPaidOutTransfersSecurityOption1 `security:"option"`
	Option2 *PostRefundNotPaidOutTransfersSecurityOption2 `security:"option"`
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
