package operations

import (
	"openapi/pkg/models/shared"
)

type GetSourceRequest struct {
	Request shared.SourceIDRequestBody `request:"mediaType=application/json"`
}

type GetSourceResponse struct {
	ContentType                string
	InvalidInputExceptionInfo  *shared.InvalidInputExceptionInfo
	NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo
	SourceRead                 *shared.SourceRead
	StatusCode                 int64
}
