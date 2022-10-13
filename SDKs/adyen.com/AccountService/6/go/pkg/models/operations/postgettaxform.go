package operations

import (
	"openapi/pkg/models/shared"
)

type PostGetTaxFormSecurityOption1 struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type PostGetTaxFormSecurityOption2 struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostGetTaxFormSecurity struct {
	Option1 *PostGetTaxFormSecurityOption1 `security:"option"`
	Option2 *PostGetTaxFormSecurityOption2 `security:"option"`
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
