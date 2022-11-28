package operations

import (
	"openapi/pkg/models/shared"
)

type PostCloseStoresSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostCloseStoresRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostCloseStoresSecurity
}

type PostCloseStoresResponse struct {
	ContentType     string
	GenericResponse *interface{}
	ServiceError    *interface{}
	StatusCode      int64
}
