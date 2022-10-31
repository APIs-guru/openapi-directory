package operations

import (
	"openapi/pkg/models/shared"
)

type PostPayoutAccountHolderSecurityOption1 struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type PostPayoutAccountHolderSecurityOption2 struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostPayoutAccountHolderSecurity struct {
	Option1 *PostPayoutAccountHolderSecurityOption1 `security:"option"`
	Option2 *PostPayoutAccountHolderSecurityOption2 `security:"option"`
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
