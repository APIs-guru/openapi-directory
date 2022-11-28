package operations

import (
	"openapi/pkg/models/shared"
)

type PostCloseAccountHolderSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
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
