package operations

import (
	"openapi/pkg/models/shared"
)

type PostCreateTestCardRangesSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostCreateTestCardRangesRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostCreateTestCardRangesSecurity
}

type PostCreateTestCardRangesResponse struct {
	ContentType                string
	CreateTestCardRangesResult *interface{}
	ServiceError               *interface{}
	StatusCode                 int64
}
