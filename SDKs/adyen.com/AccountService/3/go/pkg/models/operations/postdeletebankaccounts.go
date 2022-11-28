package operations

import (
	"openapi/pkg/models/shared"
)

type PostDeleteBankAccountsSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostDeleteBankAccountsRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostDeleteBankAccountsSecurity
}

type PostDeleteBankAccountsResponse struct {
	ContentType     string
	GenericResponse *interface{}
	ServiceError    *interface{}
	StatusCode      int64
}
