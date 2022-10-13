package operations

import (
	"openapi/pkg/models/shared"
)

type ActivityRunsGetActivityRunsStatusEnum string

const (
	ActivityRunsGetActivityRunsStatusEnumReady      ActivityRunsGetActivityRunsStatusEnum = "Ready"
	ActivityRunsGetActivityRunsStatusEnumInProgress ActivityRunsGetActivityRunsStatusEnum = "InProgress"
	ActivityRunsGetActivityRunsStatusEnumSucceeded  ActivityRunsGetActivityRunsStatusEnum = "Succeeded"
	ActivityRunsGetActivityRunsStatusEnumCancelled  ActivityRunsGetActivityRunsStatusEnum = "Cancelled"
	ActivityRunsGetActivityRunsStatusEnumFailed     ActivityRunsGetActivityRunsStatusEnum = "Failed"
)

type ActivityRunsGetActivityRunsQueryParams struct {
	Limit  *int32                                 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32                                 `queryParam:"style=form,explode=true,name=offset"`
	Status *ActivityRunsGetActivityRunsStatusEnum `queryParam:"style=form,explode=true,name=status"`
}

type ActivityRunsGetActivityRunsRequest struct {
	QueryParams ActivityRunsGetActivityRunsQueryParams
}

type ActivityRunsGetActivityRunsResponse struct {
	APIModelsAPIError                               *shared.APIModelsAPIError
	APIPagedResponseBuildSystemSharedDtoActivityRun *shared.APIPagedResponseBuildSystemSharedDtoActivityRun
	ContentType                                     string
	StatusCode                                      int64
}
