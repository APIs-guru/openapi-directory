package operations

import (
	"openapi/pkg/models/shared"
)

type PostGet3dsAvailabilitySecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostGet3dsAvailabilityRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostGet3dsAvailabilitySecurity
}

type PostGet3dsAvailabilityResponse struct {
	ContentType                 string
	ServiceError                *interface{}
	StatusCode                  int64
	ThreeDsAvailabilityResponse *interface{}
}
