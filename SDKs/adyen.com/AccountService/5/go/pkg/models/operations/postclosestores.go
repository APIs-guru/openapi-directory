package operations

import (
	"openapi/pkg/models/shared"
)

type PostCloseStoresSecurityOption1 struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type PostCloseStoresSecurityOption2 struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostCloseStoresSecurity struct {
	Option1 *PostCloseStoresSecurityOption1 `security:"option"`
	Option2 *PostCloseStoresSecurityOption2 `security:"option"`
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
