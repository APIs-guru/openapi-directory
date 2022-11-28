package operations

import (
	"openapi/pkg/models/shared"
)

type PostGetPciQuestionnaireURLSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostGetPciQuestionnaireURLRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostGetPciQuestionnaireURLSecurity
}

type PostGetPciQuestionnaireURLResponse struct {
	ContentType       string
	GetPciURLResponse *interface{}
	ServiceError      *interface{}
	StatusCode        int64
}
