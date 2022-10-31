package operations

import (
	"openapi/pkg/models/shared"
)

type PostUpdateAccountSecurityOption1 struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type PostUpdateAccountSecurityOption2 struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostUpdateAccountSecurity struct {
	Option1 *PostUpdateAccountSecurityOption1 `security:"option"`
	Option2 *PostUpdateAccountSecurityOption2 `security:"option"`
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
