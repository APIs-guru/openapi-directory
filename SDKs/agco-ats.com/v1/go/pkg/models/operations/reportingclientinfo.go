package operations

import (
	"openapi/pkg/models/shared"
)

type ReportingClientInfoQueryParams struct {
	ClientID string `queryParam:"style=form,explode=true,name=ClientID"`
}

type ReportingClientInfoRequest struct {
	QueryParams ReportingClientInfoQueryParams
}

type ReportingClientInfoResponse struct {
	APIModelsAPIError            *shared.APIModelsAPIError
	Body                         []byte
	ContentType                  string
	StatusCode                   int64
	UpdateSystemModelsClientInfo *shared.UpdateSystemModelsClientInfo
}
