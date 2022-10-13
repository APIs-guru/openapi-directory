package operations

import (
	"openapi/pkg/models/shared"
)

type PostDisableSecurityOption1 struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type PostDisableSecurityOption2 struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostDisableSecurity struct {
	Option1 *PostDisableSecurityOption1 `security:"option"`
	Option2 *PostDisableSecurityOption2 `security:"option"`
}

type PostDisableRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostDisableSecurity
}

type PostDisableResponse struct {
	ContentType   string
	DisableResult *interface{}
	ServiceError  *interface{}
	StatusCode    int64
}
