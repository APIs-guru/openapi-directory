package operations

import (
	"openapi/pkg/models/shared"
)

type PostTransfersSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostTransfersRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostTransfersSecurity
}

type PostTransfersResponse struct {
	ContentType      string
	RestServiceError *interface{}
	StatusCode       int64
	Transfer         *interface{}
}
