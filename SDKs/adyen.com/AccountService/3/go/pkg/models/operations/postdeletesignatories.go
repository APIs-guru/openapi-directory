package operations

import (
	"openapi/pkg/models/shared"
)

type PostDeleteSignatoriesSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostDeleteSignatoriesRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostDeleteSignatoriesSecurity
}

type PostDeleteSignatoriesResponse struct {
	ContentType     string
	GenericResponse *interface{}
	ServiceError    *interface{}
	StatusCode      int64
}
