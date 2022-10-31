package operations

import (
	"openapi/pkg/models/shared"
)

type CheckConnectionToDestinationRequest struct {
	Request shared.DestinationIDRequestBody `request:"mediaType=application/json"`
}

type CheckConnectionToDestinationResponse struct {
	CheckConnectionRead        *shared.CheckConnectionRead
	ContentType                string
	InvalidInputExceptionInfo  *shared.InvalidInputExceptionInfo
	NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo
	StatusCode                 int64
}
