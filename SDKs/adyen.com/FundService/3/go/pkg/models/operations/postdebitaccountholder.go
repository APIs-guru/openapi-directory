package operations

import (
	"openapi/pkg/models/shared"
)

type PostDebitAccountHolderSecurityOption1 struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type PostDebitAccountHolderSecurityOption2 struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostDebitAccountHolderSecurity struct {
	Option1 *PostDebitAccountHolderSecurityOption1 `security:"option"`
	Option2 *PostDebitAccountHolderSecurityOption2 `security:"option"`
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
