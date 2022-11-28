package operations

import (
	"openapi/pkg/models/shared"
)

type PostNotifyShopperSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostNotifyShopperRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostNotifyShopperSecurity
}

type PostNotifyShopperResponse struct {
	ContentType         string
	NotifyShopperResult *interface{}
	ServiceError        *interface{}
	StatusCode          int64
}
