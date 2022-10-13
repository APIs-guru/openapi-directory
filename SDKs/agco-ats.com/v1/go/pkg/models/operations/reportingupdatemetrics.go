package operations

import (
	"openapi/pkg/models/shared"
)

type ReportingUpdateMetricsQueryParams struct {
	UpdateGroupID string `queryParam:"style=form,explode=true,name=UpdateGroupID"`
	BundleNumber  *int32 `queryParam:"style=form,explode=true,name=bundleNumber"`
}

type ReportingUpdateMetricsRequest struct {
	QueryParams ReportingUpdateMetricsQueryParams
}

type ReportingUpdateMetricsResponse struct {
	APIModelsAPIError                   *shared.APIModelsAPIError
	Body                                []byte
	ContentType                         string
	StatusCode                          int64
	UpdateSystemModelsUpdateMetricsData *shared.UpdateSystemModelsUpdateMetricsData
}
