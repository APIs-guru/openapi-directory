package operations

import (
	"openapi/pkg/models/shared"
)

type JobsGetJobsQueryParams struct {
	IsIncludeDeleted *bool  `queryParam:"style=form,explode=true,name=isIncludeDeleted"`
	Limit            *int32 `queryParam:"style=form,explode=true,name=limit"`
	Offset           *int32 `queryParam:"style=form,explode=true,name=offset"`
}

type JobsGetJobsRequest struct {
	QueryParams JobsGetJobsQueryParams
}

type JobsGetJobsResponse struct {
	APIModelsAPIError                       *shared.APIModelsAPIError
	APIPagedResponseBuildSystemSharedDtoJob *shared.APIPagedResponseBuildSystemSharedDtoJob
	ContentType                             string
	StatusCode                              int64
}
