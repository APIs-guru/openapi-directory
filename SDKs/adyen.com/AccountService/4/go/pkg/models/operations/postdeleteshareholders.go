package operations

import (
	"openapi/pkg/models/shared"
)

type PostDeleteShareholdersSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostDeleteShareholdersRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostDeleteShareholdersSecurity
}

type PostDeleteShareholdersResponse struct {
	ContentType     string
	GenericResponse *interface{}
	ServiceError    *interface{}
	StatusCode      int64
}
