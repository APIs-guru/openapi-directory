package operations

import (
	"openapi/pkg/models/shared"
)

type PostGetUploadedDocumentsSecurityOption1 struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type PostGetUploadedDocumentsSecurityOption2 struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostGetUploadedDocumentsSecurity struct {
	Option1 *PostGetUploadedDocumentsSecurityOption1 `security:"option"`
	Option2 *PostGetUploadedDocumentsSecurityOption2 `security:"option"`
}

type PostGetUploadedDocumentsRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostGetUploadedDocumentsSecurity
}

type PostGetUploadedDocumentsResponse struct {
	ContentType                  string
	GetUploadedDocumentsResponse *interface{}
	ServiceError                 *interface{}
	StatusCode                   int64
}
