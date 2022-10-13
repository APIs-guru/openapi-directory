package operations

import (
	"openapi/pkg/models/shared"
)

type PostUpdateNotificationConfigurationSecurityOption1 struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type PostUpdateNotificationConfigurationSecurityOption2 struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostUpdateNotificationConfigurationSecurity struct {
	Option1 *PostUpdateNotificationConfigurationSecurityOption1 `security:"option"`
	Option2 *PostUpdateNotificationConfigurationSecurityOption2 `security:"option"`
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
