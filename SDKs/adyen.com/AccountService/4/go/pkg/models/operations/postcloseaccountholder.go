package operations

import (
	"openapi/pkg/models/shared"
)

type PostCloseAccountHolderSecurityOption1 struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type PostCloseAccountHolderSecurityOption2 struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostCloseAccountHolderSecurity struct {
	Option1 *PostCloseAccountHolderSecurityOption1 `security:"option"`
	Option2 *PostCloseAccountHolderSecurityOption2 `security:"option"`
}

type PostCloseAccountHolderRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostCloseAccountHolderSecurity
}

type PostCloseAccountHolderResponse struct {
	CloseAccountHolderResponse *interface{}
	ContentType                string
	ServiceError               *interface{}
	StatusCode                 int64
}
