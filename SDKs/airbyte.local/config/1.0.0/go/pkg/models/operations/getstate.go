package operations

import (
	"openapi/pkg/models/shared"
)

type GetStateRequest struct {
	Request shared.ConnectionIDRequestBody `request:"mediaType=application/json"`
}

type GetStateResponse struct {
	ConnectionState            *shared.ConnectionState
	ContentType                string
	InvalidInputExceptionInfo  *shared.InvalidInputExceptionInfo
	NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo
	StatusCode                 int64
}
