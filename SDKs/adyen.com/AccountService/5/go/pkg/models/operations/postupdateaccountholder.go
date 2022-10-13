package operations

import (
	"openapi/pkg/models/shared"
)

type PostUpdateAccountHolderSecurityOption1 struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type PostUpdateAccountHolderSecurityOption2 struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostUpdateAccountHolderSecurity struct {
	Option1 *PostUpdateAccountHolderSecurityOption1 `security:"option"`
	Option2 *PostUpdateAccountHolderSecurityOption2 `security:"option"`
}

type PostUpdateAccountHolderRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostUpdateAccountHolderSecurity
}

type PostUpdateAccountHolderResponse struct {
	ContentType                 string
	ServiceError                *interface{}
	StatusCode                  int64
	UpdateAccountHolderResponse *interface{}
}
