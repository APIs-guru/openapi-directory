package operations

import (
	"openapi/pkg/models/shared"
)

type PostAccountHolderTransactionListSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostAccountHolderTransactionListRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostAccountHolderTransactionListSecurity
}

type PostAccountHolderTransactionListResponse struct {
	AccountHolderTransactionListResponse *interface{}
	ContentType                          string
	ServiceError                         *interface{}
	StatusCode                           int64
}
