package operations

import (
	"openapi/pkg/models/shared"
)

type ResetConnectionRequest struct {
	Request shared.ConnectionIDRequestBody `request:"mediaType=application/json"`
}

type ResetConnectionResponse struct {
	ContentType                string
	InvalidInputExceptionInfo  *shared.InvalidInputExceptionInfo
	JobInfoRead                *shared.JobInfoRead
	NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo
	StatusCode                 int64
}
