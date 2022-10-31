package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSourceRequest struct {
	Request shared.SourceUpdate `request:"mediaType=application/json"`
}

type UpdateSourceResponse struct {
	ContentType                string
	InvalidInputExceptionInfo  *shared.InvalidInputExceptionInfo
	NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo
	SourceRead                 *shared.SourceRead
	StatusCode                 int64
}
