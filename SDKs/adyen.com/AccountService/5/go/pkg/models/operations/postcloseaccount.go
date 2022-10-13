package operations

import (
	"openapi/pkg/models/shared"
)

type PostCloseAccountSecurityOption1 struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type PostCloseAccountSecurityOption2 struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostCloseAccountSecurity struct {
	Option1 *PostCloseAccountSecurityOption1 `security:"option"`
	Option2 *PostCloseAccountSecurityOption2 `security:"option"`
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
