package operations

import (
	"openapi/pkg/models/shared"
)

type PostUnSuspendAccountHolderSecurityOption1 struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type PostUnSuspendAccountHolderSecurityOption2 struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostUnSuspendAccountHolderSecurity struct {
	Option1 *PostUnSuspendAccountHolderSecurityOption1 `security:"option"`
	Option2 *PostUnSuspendAccountHolderSecurityOption2 `security:"option"`
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
