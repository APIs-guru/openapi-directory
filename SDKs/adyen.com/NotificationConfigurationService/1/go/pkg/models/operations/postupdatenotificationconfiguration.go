package operations

import (
	"openapi/pkg/models/shared"
)

type PostUpdateNotificationConfigurationSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostUpdateNotificationConfigurationRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostUpdateNotificationConfigurationSecurity
}

type PostUpdateNotificationConfigurationResponse struct {
	ContentType                          string
	GetNotificationConfigurationResponse *interface{}
	ServiceError                         *interface{}
	StatusCode                           int64
}
