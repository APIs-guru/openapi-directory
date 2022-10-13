package operations

import (
	"openapi/pkg/models/shared"
)

type ActivityRunsGetActivityRunStatusPathParams struct {
	ActivityRunID int32 `pathParam:"style=simple,explode=false,name=activityRunID"`
}

type ActivityRunsGetActivityRunStatusRequest struct {
	PathParams ActivityRunsGetActivityRunStatusPathParams
}

type ActivityRunsGetActivityRunStatusResponse struct {
	APIModelsAPIError                     *shared.APIModelsAPIError
	Body                                  []byte
	BuildSystemSharedDtoActivityRunStatus *shared.BuildSystemSharedDtoActivityRunStatus
	ContentType                           string
	StatusCode                            int64
}
