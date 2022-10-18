package operations

import (
	"openapi/pkg/models/shared"
)

type LogsPostLogQueryParams struct {
	Message string `queryParam:"style=form,explode=true,name=Message"`
}

type LogsPostLogRequest struct {
	QueryParams LogsPostLogQueryParams
}

type LogsPostLogResponse struct {
	APIModelsAPIError                   *shared.APIModelsAPIError
	Body                                []byte
	ContentType                         string
	LogsPostLog200ApplicationJSONString *string
	LogsPostLog200TextJSONString        *string
	StatusCode                          int64
}
