package operations

import (
	"openapi/pkg/models/shared"
)

type PostDisableSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
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
