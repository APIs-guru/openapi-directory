package operations

import (
	"openapi/pkg/models/shared"
)

type ActivitiesGetActivityPathParams struct {
	ActivityID int32 `pathParam:"style=simple,explode=false,name=activityID"`
}

type ActivitiesGetActivityQueryParams struct {
	IsIncludeDeleted *bool `queryParam:"style=form,explode=true,name=isIncludeDeleted"`
}

type ActivitiesGetActivityRequest struct {
	PathParams  ActivitiesGetActivityPathParams
	QueryParams ActivitiesGetActivityQueryParams
}

type ActivitiesGetActivityResponse struct {
	APIModelsAPIError            *shared.APIModelsAPIError
	Body                         []byte
	BuildSystemSharedDtoActivity *shared.BuildSystemSharedDtoActivity
	ContentType                  string
	StatusCode                   int64
}
