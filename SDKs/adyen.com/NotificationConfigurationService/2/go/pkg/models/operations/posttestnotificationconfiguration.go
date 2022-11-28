package operations

import (
	"openapi/pkg/models/shared"
)

type PostTestNotificationConfigurationSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
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
