package operations

import (
	"openapi/pkg/models/shared"
)

type JobRunsGetJobRunPathParams struct {
	JobRunID int32 `pathParam:"style=simple,explode=false,name=jobRunID"`
}

type JobRunsGetJobRunQueryParams struct {
	IncludeActivityRunDetails *bool `queryParam:"style=form,explode=true,name=includeActivityRunDetails"`
}

type JobRunsGetJobRunRequest struct {
	PathParams  JobRunsGetJobRunPathParams
	QueryParams JobRunsGetJobRunQueryParams
}

type JobRunsGetJobRunResponse struct {
	APIModelsAPIError          *shared.APIModelsAPIError
	Body                       []byte
	BuildSystemSharedDtoJobRun *shared.BuildSystemSharedDtoJobRun
	ContentType                string
	StatusCode                 int64
}
