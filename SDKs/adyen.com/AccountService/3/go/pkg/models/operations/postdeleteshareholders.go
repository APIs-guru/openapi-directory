package operations

import (
	"openapi/pkg/models/shared"
)

type PostDeleteShareholdersSecurityOption1 struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type PostDeleteShareholdersSecurityOption2 struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostDeleteShareholdersSecurity struct {
	Option1 *PostDeleteShareholdersSecurityOption1 `security:"option"`
	Option2 *PostDeleteShareholdersSecurityOption2 `security:"option"`
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
