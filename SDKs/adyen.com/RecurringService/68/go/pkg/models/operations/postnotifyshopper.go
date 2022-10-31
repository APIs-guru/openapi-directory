package operations

import (
	"openapi/pkg/models/shared"
)

type PostNotifyShopperSecurityOption1 struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type PostNotifyShopperSecurityOption2 struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostNotifyShopperSecurity struct {
	Option1 *PostNotifyShopperSecurityOption1 `security:"option"`
	Option2 *PostNotifyShopperSecurityOption2 `security:"option"`
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
