package operations

import (
	"openapi/pkg/models/shared"
)

type ActivitiesGetActivitiesQueryParams struct {
	IsIncludeDeleted *bool  `queryParam:"style=form,explode=true,name=isIncludeDeleted"`
	Limit            *int32 `queryParam:"style=form,explode=true,name=limit"`
	Offset           *int32 `queryParam:"style=form,explode=true,name=offset"`
}

type ActivitiesGetActivitiesRequest struct {
	QueryParams ActivitiesGetActivitiesQueryParams
}

type ActivitiesGetActivitiesResponse struct {
	APIModelsAPIError                            *shared.APIModelsAPIError
	APIPagedResponseBuildSystemSharedDtoActivity *shared.APIPagedResponseBuildSystemSharedDtoActivity
	ContentType                                  string
	StatusCode                                   int64
}
