package operations

import (
	"openapi/pkg/models/shared"
)

type CancelJobRequest struct {
	Request shared.JobIDRequestBody `request:"mediaType=application/json"`
}

type CancelJobResponse struct {
	ContentType                string
	InvalidInputExceptionInfo  *shared.InvalidInputExceptionInfo
	JobInfoRead                *shared.JobInfoRead
	NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo
	StatusCode                 int64
}
