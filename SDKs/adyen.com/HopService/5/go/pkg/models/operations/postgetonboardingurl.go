package operations

import (
	"openapi/pkg/models/shared"
)

type PostGetOnboardingURLSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostGetOnboardingURLRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostGetOnboardingURLSecurity
}

type PostGetOnboardingURLResponse struct {
	ContentType              string
	GetOnboardingURLResponse *interface{}
	ServiceError             *interface{}
	StatusCode               int64
}
