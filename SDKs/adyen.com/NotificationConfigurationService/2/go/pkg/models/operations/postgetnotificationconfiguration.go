package operations

import (
	"openapi/pkg/models/shared"
)

type PostGetNotificationConfigurationSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostGetNotificationConfigurationRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostGetNotificationConfigurationSecurity
}

type PostGetNotificationConfigurationResponse struct {
	ContentType                          string
	GetNotificationConfigurationResponse *interface{}
	ServiceError                         *interface{}
	StatusCode                           int64
}
