package operations

import (
	"openapi/pkg/models/shared"
)

type TryNotificationConfigRequest struct {
	Request shared.Notification `request:"mediaType=application/json"`
}

type TryNotificationConfigResponse struct {
	ContentType                string
	InvalidInputExceptionInfo  *shared.InvalidInputExceptionInfo
	NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo
	NotificationRead           *shared.NotificationRead
	StatusCode                 int64
}
