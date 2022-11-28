package operations

import (
	"openapi/pkg/models/shared"
)

type PostAccountHolderBalanceSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostAccountHolderBalanceRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostAccountHolderBalanceSecurity
}

type PostAccountHolderBalanceResponse struct {
	AccountHolderBalanceResponse *interface{}
	ContentType                  string
	ServiceError                 *interface{}
	StatusCode                   int64
}
