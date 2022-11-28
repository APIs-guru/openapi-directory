package operations

import (
	"openapi/pkg/models/shared"
)

type PostGetNotificationConfigurationListSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostGetNotificationConfigurationListRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostGetNotificationConfigurationListSecurity
}

type PostGetNotificationConfigurationListResponse struct {
	ContentType                              string
	GetNotificationConfigurationListResponse *interface{}
	ServiceError                             *interface{}
	StatusCode                               int64
}
