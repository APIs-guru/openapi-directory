package operations

import (
	"openapi/pkg/models/shared"
)

type PostCheckAccountHolderSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostCheckAccountHolderRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostCheckAccountHolderSecurity
}

type PostCheckAccountHolderResponse struct {
	ContentType     string
	GenericResponse *interface{}
	ServiceError    *interface{}
	StatusCode      int64
}
