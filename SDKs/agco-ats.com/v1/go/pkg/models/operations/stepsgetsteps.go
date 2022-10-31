package operations

import (
	"openapi/pkg/models/shared"
)

type StepsGetStepsQueryParams struct {
	IncludeDeleted *bool  `queryParam:"style=form,explode=true,name=includeDeleted"`
	Limit          *int32 `queryParam:"style=form,explode=true,name=limit"`
	Offset         *int32 `queryParam:"style=form,explode=true,name=offset"`
}

type StepsGetStepsRequest struct {
	QueryParams StepsGetStepsQueryParams
}

type StepsGetStepsResponse struct {
	APIModelsAPIError                        *shared.APIModelsAPIError
	APIPagedResponseBuildSystemSharedDtoStep *shared.APIPagedResponseBuildSystemSharedDtoStep
	ContentType                              string
	StatusCode                               int64
}
