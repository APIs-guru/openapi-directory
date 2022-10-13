package operations

import (
	"openapi/pkg/models/shared"
)

type CheckConnectionToSourceForUpdateRequest struct {
	Request shared.SourceUpdate `request:"mediaType=application/json"`
}

type CheckConnectionToSourceForUpdateResponse struct {
	CheckConnectionRead        *shared.CheckConnectionRead
	ContentType                string
	InvalidInputExceptionInfo  *shared.InvalidInputExceptionInfo
	NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo
	StatusCode                 int64
}
