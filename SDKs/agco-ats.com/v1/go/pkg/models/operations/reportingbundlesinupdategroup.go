package operations

import (
	"openapi/pkg/models/shared"
)

type ReportingBundlesInUpdateGroupQueryParams struct {
	ID              string `queryParam:"style=form,explode=true,name=ID"`
	IncludeInactive bool   `queryParam:"style=form,explode=true,name=IncludeInactive"`
	Limit           *int32 `queryParam:"style=form,explode=true,name=limit"`
	Offset          *int32 `queryParam:"style=form,explode=true,name=offset"`
}

type ReportingBundlesInUpdateGroupRequest struct {
	QueryParams ReportingBundlesInUpdateGroupQueryParams
}

type ReportingBundlesInUpdateGroupResponse struct {
	APIModelsAPIError                        *shared.APIModelsAPIError
	APIPagedResponseUpdateSystemModelsBundle *shared.APIPagedResponseUpdateSystemModelsBundle
	ContentType                              string
	StatusCode                               int64
}
