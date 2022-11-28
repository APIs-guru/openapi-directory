package operations

import (
	"openapi/pkg/models/shared"
)

type PostGetAccountHolderSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostGetAccountHolderRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostGetAccountHolderSecurity
}

type PostGetAccountHolderResponse struct {
	ContentType              string
	GetAccountHolderResponse *interface{}
	ServiceError             *interface{}
	StatusCode               int64
}
