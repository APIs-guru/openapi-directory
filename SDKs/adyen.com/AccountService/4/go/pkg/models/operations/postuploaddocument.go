package operations

import (
	"openapi/pkg/models/shared"
)

type PostUploadDocumentSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
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
