package operations

import (
	"openapi/pkg/models/shared"
)

type LogsGetLogsQueryParams struct {
	Limit  *int32 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
}

type LogsGetLogsRequest struct {
	QueryParams LogsGetLogsQueryParams
}

type LogsGetLogsResponse struct {
	APIModelsAPIError            *shared.APIModelsAPIError
	APIPagedResponseAPIModelsLog *shared.APIPagedResponseAPIModelsLog
	ContentType                  string
	StatusCode                   int64
}
