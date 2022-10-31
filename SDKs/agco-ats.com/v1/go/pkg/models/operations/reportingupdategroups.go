package operations

import (
	"openapi/pkg/models/shared"
)

type ReportingUpdateGroupsQueryParams struct {
	Limit  *int32 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
}

type ReportingUpdateGroupsRequest struct {
	QueryParams ReportingUpdateGroupsQueryParams
}

type ReportingUpdateGroupsResponse struct {
	APIModelsAPIError                             *shared.APIModelsAPIError
	APIPagedResponseUpdateSystemModelsUpdateGroup *shared.APIPagedResponseUpdateSystemModelsUpdateGroup
	ContentType                                   string
	StatusCode                                    int64
}
