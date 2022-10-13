package operations

import (
	"openapi/pkg/models/shared"
)

type NotificationsPostMailRequests struct {
	APIModelsNotification  *shared.APIModelsNotification `request:"mediaType=application/json"`
	APIModelsNotification1 *shared.APIModelsNotification `request:"mediaType=application/x-www-form-urlencoded"`
	APIModelsNotification2 *shared.APIModelsNotification `request:"mediaType=text/json"`
	ApplicationXML         []byte                        `request:"mediaType=application/xml"`
	TextXML                []byte                        `request:"mediaType=text/xml"`
}

type NotificationsPostMailRequest struct {
	Request NotificationsPostMailRequests
}

type NotificationsPostMailResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
