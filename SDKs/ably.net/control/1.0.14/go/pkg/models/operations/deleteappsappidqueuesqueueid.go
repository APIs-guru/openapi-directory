package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAppsAppIDQueuesQueueIDPathParams struct {
	AppID   string `pathParam:"style=simple,explode=false,name=app_id"`
	QueueID string `pathParam:"style=simple,explode=false,name=queue_id"`
}

type DeleteAppsAppIDQueuesQueueIDSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type DeleteAppsAppIDQueuesQueueIDRequest struct {
	PathParams DeleteAppsAppIDQueuesQueueIDPathParams
	Security   DeleteAppsAppIDQueuesQueueIDSecurity
}

type DeleteAppsAppIDQueuesQueueIDResponse struct {
	ContentType string
	StatusCode  int64
	Error       *shared.Error
}
