package operations

import (
	"openapi/pkg/models/shared"
)

type PostUpdateAccountHolderSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
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
