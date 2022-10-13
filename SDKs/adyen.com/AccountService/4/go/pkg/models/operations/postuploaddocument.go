package operations

import (
	"openapi/pkg/models/shared"
)

type PostUploadDocumentSecurityOption1 struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type PostUploadDocumentSecurityOption2 struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostUploadDocumentSecurity struct {
	Option1 *PostUploadDocumentSecurityOption1 `security:"option"`
	Option2 *PostUploadDocumentSecurityOption2 `security:"option"`
}

type PostUploadDocumentRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostUploadDocumentSecurity
}

type PostUploadDocumentResponse struct {
	ContentType                 string
	ServiceError                *interface{}
	StatusCode                  int64
	UpdateAccountHolderResponse *interface{}
}
