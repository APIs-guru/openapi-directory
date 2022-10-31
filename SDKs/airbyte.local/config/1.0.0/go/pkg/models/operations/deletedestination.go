package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDestinationRequest struct {
	Request shared.DestinationIDRequestBody `request:"mediaType=application/json"`
}

type DeleteDestinationResponse struct {
	ContentType                string
	InvalidInputExceptionInfo  *shared.InvalidInputExceptionInfo
	NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo
	StatusCode                 int64
}
