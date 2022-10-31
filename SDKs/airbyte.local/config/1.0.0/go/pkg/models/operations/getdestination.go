package operations

import (
	"openapi/pkg/models/shared"
)

type GetDestinationRequest struct {
	Request shared.DestinationIDRequestBody `request:"mediaType=application/json"`
}

type GetDestinationResponse struct {
	ContentType                string
	DestinationRead            *shared.DestinationRead
	InvalidInputExceptionInfo  *shared.InvalidInputExceptionInfo
	NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo
	StatusCode                 int64
}
