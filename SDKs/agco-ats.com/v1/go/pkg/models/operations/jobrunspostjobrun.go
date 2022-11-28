package operations

import (
	"openapi/pkg/models/shared"
)

type JobRunsPostJobRunRequestsInput struct {
	ApplicationXML              []byte                                  `request:"mediaType=application/xml"`
	BuildSystemSharedDtoJobRun  *shared.BuildSystemSharedDtoJobRunInput `request:"mediaType=application/json"`
	BuildSystemSharedDtoJobRun1 *shared.BuildSystemSharedDtoJobRunInput `request:"mediaType=application/x-www-form-urlencoded"`
	BuildSystemSharedDtoJobRun2 *shared.BuildSystemSharedDtoJobRunInput `request:"mediaType=text/json"`
	TextXML                     []byte                                  `request:"mediaType=text/xml"`
}

type JobRunsPostJobRunRequest struct {
	Request JobRunsPostJobRunRequestsInput
}

type JobRunsPostJobRunResponse struct {
	APIModelsAPIError                               *shared.APIModelsAPIError
	Body                                            []byte
	ContentType                                     string
	JobRunsPostJobRun200ApplicationJSONInt32Integer *int32
	JobRunsPostJobRun200TextJSONInt32Integer        *int32
	StatusCode                                      int64
}
