package operations

import (
	"openapi/pkg/models/shared"
)

type GetAppsAppIDQueuesPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=app_id"`
}

type GetAppsAppIDQueuesSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetAppsAppIDQueuesRequest struct {
	PathParams GetAppsAppIDQueuesPathParams
	Security   GetAppsAppIDQueuesSecurity
}

type GetAppsAppIDQueuesResponse struct {
	ContentType    string
	StatusCode     int64
	Error          *shared.Error
	QueueResponses []shared.QueueResponse
}
