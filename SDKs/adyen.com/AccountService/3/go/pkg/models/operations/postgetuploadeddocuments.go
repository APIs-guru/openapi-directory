package operations

import (
	"openapi/pkg/models/shared"
)

type PostGetUploadedDocumentsSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
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
