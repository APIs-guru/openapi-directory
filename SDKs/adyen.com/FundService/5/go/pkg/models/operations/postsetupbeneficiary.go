package operations

import (
	"openapi/pkg/models/shared"
)

type PostSetupBeneficiarySecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostSetupBeneficiaryRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostSetupBeneficiarySecurity
}

type PostSetupBeneficiaryResponse struct {
	ContentType              string
	ServiceError             *interface{}
	SetupBeneficiaryResponse *interface{}
	StatusCode               int64
}
