package operations

import (
	"openapi/pkg/models/shared"
)

type PostGetNotificationConfigurationListSecurityOption1 struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type PostGetNotificationConfigurationListSecurityOption2 struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostGetNotificationConfigurationListSecurity struct {
	Option1 *PostGetNotificationConfigurationListSecurityOption1 `security:"option"`
	Option2 *PostGetNotificationConfigurationListSecurityOption2 `security:"option"`
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
