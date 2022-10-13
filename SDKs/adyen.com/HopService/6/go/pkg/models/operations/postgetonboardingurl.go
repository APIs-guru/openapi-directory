package operations

import (
	"openapi/pkg/models/shared"
)

type PostGetOnboardingURLSecurityOption1 struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type PostGetOnboardingURLSecurityOption2 struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostGetOnboardingURLSecurity struct {
	Option1 *PostGetOnboardingURLSecurityOption1 `security:"option"`
	Option2 *PostGetOnboardingURLSecurityOption2 `security:"option"`
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
