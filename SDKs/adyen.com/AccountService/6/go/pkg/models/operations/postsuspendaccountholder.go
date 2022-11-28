package operations

import (
	"openapi/pkg/models/shared"
)

type PostSuspendAccountHolderSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostSuspendAccountHolderRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostSuspendAccountHolderSecurity
}

type PostSuspendAccountHolderResponse struct {
	ContentType                  string
	ServiceError                 *interface{}
	StatusCode                   int64
	SuspendAccountHolderResponse *interface{}
}
