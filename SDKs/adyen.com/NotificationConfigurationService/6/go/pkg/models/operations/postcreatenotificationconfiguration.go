package operations

import (
	"openapi/pkg/models/shared"
)

type PostCreateNotificationConfigurationSecurityOption1 struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type PostCreateNotificationConfigurationSecurityOption2 struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostCreateNotificationConfigurationSecurity struct {
	Option1 *PostCreateNotificationConfigurationSecurityOption1 `security:"option"`
	Option2 *PostCreateNotificationConfigurationSecurityOption2 `security:"option"`
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
