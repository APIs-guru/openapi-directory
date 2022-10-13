package operations

import (
	"openapi/pkg/models/shared"
)

type PostTestNotificationConfigurationSecurityOption1 struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type PostTestNotificationConfigurationSecurityOption2 struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostTestNotificationConfigurationSecurity struct {
	Option1 *PostTestNotificationConfigurationSecurityOption1 `security:"option"`
	Option2 *PostTestNotificationConfigurationSecurityOption2 `security:"option"`
}

type PostTestNotificationConfigurationRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostTestNotificationConfigurationSecurity
}

type PostTestNotificationConfigurationResponse struct {
	ContentType                           string
	ServiceError                          *interface{}
	StatusCode                            int64
	TestNotificationConfigurationResponse *interface{}
}
