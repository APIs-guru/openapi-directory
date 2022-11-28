package operations

import (
	"openapi/pkg/models/shared"
)

type PostCreateAccountHolderSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostCreateAccountHolderRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostCreateAccountHolderSecurity
}

type PostCreateAccountHolderResponse struct {
	ContentType                 string
	CreateAccountHolderResponse *interface{}
	ServiceError                *interface{}
	StatusCode                  int64
}
