package operations

import (
	"openapi/pkg/models/shared"
)

type PostUpdateAccountHolderStateSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostUpdateAccountHolderStateRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostUpdateAccountHolderStateSecurity
}

type PostUpdateAccountHolderStateResponse struct {
	ContentType                    string
	GetAccountHolderStatusResponse *interface{}
	ServiceError                   *interface{}
	StatusCode                     int64
}
