package operations

import (
	"openapi/pkg/models/shared"
)

type PostCloseAccountSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostCloseAccountRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostCloseAccountSecurity
}

type PostCloseAccountResponse struct {
	CloseAccountResponse *interface{}
	ContentType          string
	ServiceError         *interface{}
	StatusCode           int64
}
