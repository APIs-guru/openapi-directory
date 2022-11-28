package operations

import (
	"openapi/pkg/models/shared"
)

type PostDeleteNotificationConfigurationsSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostDeleteNotificationConfigurationsRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostDeleteNotificationConfigurationsSecurity
}

type PostDeleteNotificationConfigurationsResponse struct {
	ContentType     string
	GenericResponse *interface{}
	ServiceError    *interface{}
	StatusCode      int64
}
