package operations

import (
	"openapi/pkg/models/shared"
)

type PostScheduleAccountUpdaterSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostScheduleAccountUpdaterRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostScheduleAccountUpdaterSecurity
}

type PostScheduleAccountUpdaterResponse struct {
	ContentType                  string
	ScheduleAccountUpdaterResult *interface{}
	ServiceError                 *interface{}
	StatusCode                   int64
}
