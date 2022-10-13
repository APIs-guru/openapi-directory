package operations

import (
	"openapi/pkg/models/shared"
)

type WebBackendGetConnectionRequest struct {
	Request shared.WebBackendConnectionRequestBody `request:"mediaType=application/json"`
}

type WebBackendGetConnectionResponse struct {
	ContentType                string
	InvalidInputExceptionInfo  *shared.InvalidInputExceptionInfo
	NotFoundKnownExceptionInfo *shared.NotFoundKnownExceptionInfo
	StatusCode                 int64
	WebBackendConnectionRead   *shared.WebBackendConnectionRead
}
