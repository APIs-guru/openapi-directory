package operations

import (
	"openapi/pkg/models/shared"
)

type PostCheckAccountHolderSecurityOption1 struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type PostCheckAccountHolderSecurityOption2 struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostCheckAccountHolderSecurity struct {
	Option1 *PostCheckAccountHolderSecurityOption1 `security:"option"`
	Option2 *PostCheckAccountHolderSecurityOption2 `security:"option"`
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
