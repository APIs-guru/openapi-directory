package operations

import (
	"openapi/pkg/models/shared"
)

type LogsGetLogPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=ID"`
}

type LogsGetLogRequest struct {
	PathParams LogsGetLogPathParams
}

type LogsGetLogResponse struct {
	APIModelsAPIError *shared.APIModelsAPIError
	APIModelsLog      *shared.APIModelsLog
	Body              []byte
	ContentType       string
	StatusCode        int64
}
