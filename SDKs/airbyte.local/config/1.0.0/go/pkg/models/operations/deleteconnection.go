package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteConnectionRequest struct {
	Request shared.ConnectionIDRequestBody `request:"mediaType=application/json"`
}

type DeleteConnectionResponse struct {
	ContentType                string
	InvalidInputExceptionInfo  *shared.InvalidInputExceptionInfo
	NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo
	StatusCode                 int64
}
