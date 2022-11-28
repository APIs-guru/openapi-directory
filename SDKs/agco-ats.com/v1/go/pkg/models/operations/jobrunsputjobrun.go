package operations

import (
	"openapi/pkg/models/shared"
)

type JobRunsPutJobRunPathParams struct {
	JobRunID int32 `pathParam:"style=simple,explode=false,name=jobRunID"`
}

type JobRunsPutJobRunRequestsInput struct {
	ApplicationXML              []byte                                  `request:"mediaType=application/xml"`
	BuildSystemSharedDtoJobRun  *shared.BuildSystemSharedDtoJobRunInput `request:"mediaType=application/json"`
	BuildSystemSharedDtoJobRun1 *shared.BuildSystemSharedDtoJobRunInput `request:"mediaType=application/x-www-form-urlencoded"`
	BuildSystemSharedDtoJobRun2 *shared.BuildSystemSharedDtoJobRunInput `request:"mediaType=text/json"`
	TextXML                     []byte                                  `request:"mediaType=text/xml"`
}

type JobRunsPutJobRunRequest struct {
	PathParams JobRunsPutJobRunPathParams
	Request    JobRunsPutJobRunRequestsInput
}

type JobRunsPutJobRunResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
