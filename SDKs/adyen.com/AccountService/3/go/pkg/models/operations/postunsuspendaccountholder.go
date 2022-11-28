package operations

import (
	"openapi/pkg/models/shared"
)

type PostUnSuspendAccountHolderSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostUnSuspendAccountHolderRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostUnSuspendAccountHolderSecurity
}

type PostUnSuspendAccountHolderResponse struct {
	ContentType                    string
	ServiceError                   *interface{}
	StatusCode                     int64
	UnSuspendAccountHolderResponse *interface{}
}
