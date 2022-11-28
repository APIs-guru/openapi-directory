package operations

import (
	"openapi/pkg/models/shared"
)

type PostCreateNotificationConfigurationSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostCreateNotificationConfigurationRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostCreateNotificationConfigurationSecurity
}

type PostCreateNotificationConfigurationResponse struct {
	ContentType                          string
	GetNotificationConfigurationResponse *interface{}
	ServiceError                         *interface{}
	StatusCode                           int64
}
