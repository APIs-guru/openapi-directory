package operations

import (
	"openapi/pkg/models/shared"
)

type PostCreateAccountSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostCreateAccountRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostCreateAccountSecurity
}

type PostCreateAccountResponse struct {
	ContentType           string
	CreateAccountResponse *interface{}
	ServiceError          *interface{}
	StatusCode            int64
}
