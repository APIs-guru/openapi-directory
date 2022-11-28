package operations

import (
	"openapi/pkg/models/shared"
)

type PostListRecurringDetailsSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostListRecurringDetailsRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostListRecurringDetailsSecurity
}

type PostListRecurringDetailsResponse struct {
	ContentType            string
	RecurringDetailsResult *interface{}
	ServiceError           *interface{}
	StatusCode             int64
}
