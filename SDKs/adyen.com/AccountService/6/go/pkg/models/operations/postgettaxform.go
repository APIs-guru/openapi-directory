package operations

import (
	"openapi/pkg/models/shared"
)

type PostGetTaxFormSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostGetTaxFormRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostGetTaxFormSecurity
}

type PostGetTaxFormResponse struct {
	ContentType        string
	GetTaxFormResponse *interface{}
	ServiceError       *interface{}
	StatusCode         int64
}
