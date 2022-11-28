package operations

import (
	"openapi/pkg/models/shared"
)

type PostDebitAccountHolderSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostDebitAccountHolderRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostDebitAccountHolderSecurity
}

type PostDebitAccountHolderResponse struct {
	ContentType                string
	DebitAccountHolderResponse *interface{}
	ServiceError               *interface{}
	StatusCode                 int64
}
