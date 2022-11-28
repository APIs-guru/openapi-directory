package operations

import (
	"openapi/pkg/models/shared"
)

type PostUpdateAccountSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostUpdateAccountRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostUpdateAccountSecurity
}

type PostUpdateAccountResponse struct {
	ContentType           string
	ServiceError          *interface{}
	StatusCode            int64
	UpdateAccountResponse *interface{}
}
