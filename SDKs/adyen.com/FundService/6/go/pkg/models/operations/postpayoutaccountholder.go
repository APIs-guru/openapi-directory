package operations

import (
	"openapi/pkg/models/shared"
)

type PostPayoutAccountHolderSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostPayoutAccountHolderRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostPayoutAccountHolderSecurity
}

type PostPayoutAccountHolderResponse struct {
	ContentType                 string
	PayoutAccountHolderResponse *interface{}
	ServiceError                *interface{}
	StatusCode                  int64
}
